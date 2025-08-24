import type { FastifyReply, FastifyRequest } from "fastify";
import { enviarMensagem } from "../../api/discord.js";

interface SendMessageBody {
    message: string,
    channelId: string,
    embed?: {
        title?: string,
        descripion?: string
    }
}

export async function postMensagem(req: FastifyRequest<{Body: SendMessageBody}>, reply: FastifyReply){
    const { message } = req.body;

    const result = await enviarMensagem(message);
    
    return reply.status(201).send({
        success: true, result
    });
}