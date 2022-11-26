import fp from "fastify-plugin";
import caching, { FastifyCachingPluginOptions } from "@fastify/caching";

const cacheEnabled: boolean =
  process.env.SERVER_DISABLE_CACHE?.toLowerCase() === "true";

export default fp<FastifyCachingPluginOptions>(async (fastify) => {
  // Activo desde el fichero .env
  const noCache: string | undefined = cacheEnabled ? "no-cache" : undefined;
  console.log(noCache);
  const cachingOptions: FastifyCachingPluginOptions = {
    privacy: noCache,
  };
  fastify.register(caching, cachingOptions);
});
