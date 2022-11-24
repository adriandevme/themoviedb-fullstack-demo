import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import got from "got";

//Cargo los parametros de entorno necesarios @WARNING validate
const movieDatabaseRootURL: string | undefined =
  process.env.MOVIEDB_API_ROOT_URL;
const movieDatabaseAPIKey: string | undefined = process.env.MOVIEDB_API_KEY;

const movie: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    "/:movieId",
    async function (
      request: FastifyRequest<{
        Params: {
          movieId: string;
        };
      }>,
      reply: FastifyReply
    ) {
      const movieId = request.params.movieId;
      const url: string = `${movieDatabaseRootURL}/movie/${movieId}?api_key=${movieDatabaseAPIKey}`;
      const data = await got.get(url, {}).json();
      return data;
    }
  );

  fastify.get(
    "/search/:searchString",
    async function (
      request: FastifyRequest<{
        Params: {
          searchString: string;
        };
      }>,
      reply: FastifyReply
    ) {
      const searchString = request.params.searchString;
      const url: string = `${movieDatabaseRootURL}/search/movie?api_key=${movieDatabaseAPIKey}&query=${searchString}`;
      const data = await got.get(url, {}).json();
      return data;
    }
  );
};

export default movie;
