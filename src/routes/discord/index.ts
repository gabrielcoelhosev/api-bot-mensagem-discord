import type { FastifyInstance } from "fastify";
import { getConnection } from "./getConnection.js";
import { postMensagem } from "./postMensagem.js";

function routes(fastify: FastifyInstance){
    fastify.get('/', getConnection);
    fastify.post('/', postMensagem);
}

export { routes as discordRoutes };