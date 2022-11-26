import { FastifyRequest, FastifyReply } from "fastify";
import got from "got";
import fetch from "node-fetch";

import { IMovieDetail, IMoviePreview } from "../interfaces";
import { utils } from "../helpers/utils";

import { ERRORS, handleServerError } from "../helpers/errors";
import { ERROR400, ERROR404 } from "../helpers/constants";

//Extrae el detalle de una pelicula desde su ID
export const getDetail = async (
  request: FastifyRequest<{
    Params: {
      movieId: string;
    };
  }>,
  reply: FastifyReply
) => {
  let data: any;
  //Consulta a theMovieDB
  try {
    const movieId = request.params.movieId;
    const url: string = utils.buildTheMovieDBURL(`movie/${movieId}`);
    const response = await fetch(url, { method: "GET" });
    // Error handling
    if (!response.ok) {
      if (response.status == 404)
        //Error, pelicula no encontrada
        reply.code(ERROR404.statusCode).send(ERRORS.movieDBResourceNotFound);
      //Error en la consulta
      else reply.code(ERROR400.statusCode).send(ERRORS.movieDBRequest);
    }
    // Ok
    else {
      data = await response.json();
      let movieDetail: IMovieDetail = {};
      if (data) {
        //Parsea la respuesta
        movieDetail = {
          id: data.id,
          title: data.title,
          posterPath: data.poster_path,
          releaseDate: data.release_date,
          voteAverage: data.vote_average,
          //Extra
          overview: data.overview,
          tagline: data.tagline,
          revenue: data.revenue,
          runtime: data.runtime,
        };
      }
      //Devuelve la pelicula OK
      reply.send(movieDetail);
    }
  } catch (e) {
    handleServerError(reply, e);
  }
};

//Busca peliculas a traves del parametro 'searchString'
export const search = async (
  request: FastifyRequest<{
    Params: {
      searchString: string;
    };
  }>,
  reply: FastifyReply
) => {
  //Prepara las variables
  const searchString = request.params.searchString;
  const url: string = utils.buildTheMovieDBURL(
    `search/movie`,
    "query",
    searchString
  );
  //Hace la peticion
  const data: any = await got.get(url, {}).json();
  //Parsea la respuesta
  const moviePreviews: IMoviePreview[] = data.results.map((p: any) => {
    const moviePreview: IMoviePreview = {
      id: p.id,
      title: p.title,
      posterPath: p.poster_path,
      releaseDate: p.release_date,
      voteAverage: p.vote_average,
    };
    return moviePreview;
  });
  //Return
  return moviePreviews;
};
