import { FastifyRequest, FastifyReply } from "fastify";
import fetch from "node-fetch";

import { IMovieDetail, IMoviePreview } from "../interfaces";
import { utils } from "../helpers/utils";

import { ERRORS } from "../helpers/errors";
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
  //Prepara las variables
  const movieId = request.params.movieId;
  const url: string = utils.buildTheMovieDBURL(`movie/${movieId}`);
  //Control de erorres la consulta
  const response = await fetch(url, { method: "GET" });
  //Gestion de errores de la consulta
  if (!response.ok) {
    if (response.status == 404)
      //Error, pelicula no encontrada
      reply.code(ERROR404.statusCode).send(ERRORS.movieDBResourceNotFound);
    //Error en la consulta
    else reply.code(ERROR400.statusCode).send(ERRORS.movieDBRequest);
  }
  // Ok
  else {
    const data = await response.json();
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
  const response = await fetch(url, { method: "GET" });
  //Control de errores de la consulta
  if (!response.ok) {
    //Error en la consulta generico
    reply.code(ERROR400.statusCode).send(ERRORS.movieDBRequest);
  }
  //Peticion ok
  else {
    //Parsea la respuesta
    const data = await response.json();
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
    //Devuelve el resultado de la busqueda OK
    reply.send(moviePreviews);
  }
};
