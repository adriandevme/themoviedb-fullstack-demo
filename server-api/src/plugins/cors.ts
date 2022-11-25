import fp from "fastify-plugin";
import cors, { FastifyCorsOptions } from "@fastify/cors";

export default fp<FastifyCorsOptions>(async (fastify) => {
  const corsOptions: FastifyCorsOptions = {
    // This is NOT recommended for production as it enables reflection exploits
    origin: true,
  };
  console.log("Registering fastify CORS plugin");
  fastify.register(cors, corsOptions);
});