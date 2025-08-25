import type { FastifyRequest, FastifyReply } from "fastify";
import { lerMensagem } from "../../api/utils/lerMensagens.js";


export async function getMensagens(req: FastifyRequest, reply: FastifyReply){

    const mensagens = await lerMensagem(10);

    return reply.status(200).send({
        data: mensagens
    });
}