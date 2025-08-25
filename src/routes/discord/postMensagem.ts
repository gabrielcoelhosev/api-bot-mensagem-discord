import type { FastifyReply, FastifyRequest } from "fastify";
import { enviarMensagem } from "../../api/discord.js";
import z from 'zod';

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