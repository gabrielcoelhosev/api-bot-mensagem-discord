import type { FastifyReply, FastifyRequest } from "fastify";

export async function getTest(_req: FastifyRequest, reply: FastifyReply){
    return reply.status(200).send({
        dados: 'getTest online demais'
    })
}