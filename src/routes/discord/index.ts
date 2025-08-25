import type { FastifyInstance } from "fastify";
import { getConnection } from "./getConnection.js";
import { postMensagem } from "./postMensagem.js";
import { getMensagens } from "./getMensagens.js";

function routes(fastify: FastifyInstance){
    fastify.get('/', getConnection);
    fastify.post('/', postMensagem);

    fastify.get('/mensagens', getMensagens);
}

export { routes as discordRoutes };