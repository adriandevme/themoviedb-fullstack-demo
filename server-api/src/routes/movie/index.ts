import { FastifyPluginAsync } from "fastify";

import * as controllers from "../../controllers";
import { getSchema, searchSchema } from "../../schema/movie.schema";

const movie: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/:movieId", { schema: getSchema }, controllers.getDetail);
  fastify.get(
    "/search/:searchString",
    { schema: searchSchema },
    controllers.search
  );
};

export default movie;
