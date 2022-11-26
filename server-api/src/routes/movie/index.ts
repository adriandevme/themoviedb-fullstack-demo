import { FastifyPluginAsync } from "fastify";

import * as controllers from "../../controllers";

const movie: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/:movieId", controllers.getDetail);
  fastify.get("/search/:searchString", controllers.search);
};

export default movie;
