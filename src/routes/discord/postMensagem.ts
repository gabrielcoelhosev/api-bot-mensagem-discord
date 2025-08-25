import type { FastifyReply, FastifyRequest } from "fastify";
import z from 'zod';
import { enviarMensagem } from "../../api/utils/enviarMensagem.js";

const bodySchema = z.object({
    message: z.string()
});

export async function postMensagem(req: FastifyRequest, reply: FastifyReply){
    const { message } = bodySchema.parse(req.body);

    const result = await enviarMensagem(message);
    
    return reply.status(201).send({
        success: true, result
    });
}