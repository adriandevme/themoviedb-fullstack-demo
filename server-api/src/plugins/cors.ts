import fp from "fastify-plugin";
import cors, { FastifyCorsOptions } from "@fastify/cors";

const corsEnabled: boolean =
  process.env.SERVER_CORS_ENABLED?.toLowerCase() === "true";

export default fp<FastifyCorsOptions>(async (fastify) => {
  const corsOptions: FastifyCorsOptions = {
    // Activo desde el fichero .env
    origin: corsEnabled,
  };
  fastify.register(cors, corsOptions);
});
