import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { discordRoutes } from "./discord/index.js";

export function routes(fastify: FastifyInstance){
    fastify.get('/check', async (_req: FastifyRequest, res: FastifyReply) => {
        return res.status(200).send({
            dados: 'Api on' 
        });
    });

    fastify.register(discordRoutes, {prefix: '/discord'});

}