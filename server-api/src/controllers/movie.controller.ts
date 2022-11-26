import { FastifyRequest, FastifyReply } from "fastify";
import got from "got";
import { IMovieDetail, IMoviePreview } from "../interfaces";

//Cargo los parametros de entorno necesarios @WARNING validate
const movieDatabaseRootURL: string | undefined =
  process.env.MOVIEDB_API_ROOT_URL;
const movieDatabaseAPIKey: string | undefined = process.env.MOVIEDB_API_KEY;

//Extrae el detalle de una pelicula desde su ID
export const getDetail = async (
  request: FastifyRequest<{
    Params: {
      movieId: string;
    };
  }>,
  reply: FastifyReply
) => {
  const movieId = request.params.movieId;
  const url: string = `${movieDatabaseRootURL}/movie/${movieId}?api_key=${movieDatabaseAPIKey}`;
  const data: any = await got.get(url, {}).json();
  //Parseamos el objeto detail
  const movieDetail: IMovieDetail = {
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
  //Return
  return movieDetail;
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
  const searchString = request.params.searchString;
  const url: string = `${movieDatabaseRootURL}/search/movie?api_key=${movieDatabaseAPIKey}&query=${searchString}`;
  const data: any = await got.get(url, {}).json();
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
  return moviePreviews;
};
