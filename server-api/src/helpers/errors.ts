import { FastifyReply } from "fastify";
import { ERROR500 } from "./constants";

export const ERRORS = {
  movieDBRequest: new Error("Error en la consulta a theMovieDB"),
  movieDBResourceNotFound: new Error(
    "Error al buscar la pelicula, pelicula no encontrada"
  ),
  //   invalidToken: new Error("Token is invalid."),
  //   userExists: new Error("User already exists"),
  //   userNotExists: new Error("User not exists"),
  //   userCredError: new Error("Invalid credential"),
  //   tokenError: new Error("Invalid Token"),
};

export function handleServerError(reply: FastifyReply, error: any) {
  return reply.status(ERROR500.statusCode).send(ERROR500);
}
