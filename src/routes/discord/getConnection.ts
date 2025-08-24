import type { FastifyReply, FastifyRequest } from "fastify";
import { discordClient } from "../../api/discord.js";

export async function getConnection(_req: FastifyRequest, reply: FastifyReply){
    return reply.status(200).send({
        online: discordClient.isReady(),
        user: discordClient.user?.tag || null,
        guilds: discordClient.guilds.cache.size
    })
}