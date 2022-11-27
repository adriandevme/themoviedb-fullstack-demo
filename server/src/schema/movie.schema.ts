import { FastifySchema } from "fastify";
import S from "fluent-json-schema";

export const getSchema: FastifySchema = {
  //body: S.object(),
  //queryString: S.object(),
  params: S.object().prop("movieId", S.string().required()),
  headers: S.object(),
};

export const searchSchema: FastifySchema = {
  //body: S.object(),
  //queryString: S.object(),
  params: S.object().prop("searchString", S.string().required()),
  headers: S.object(),
};
