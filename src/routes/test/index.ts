import type { FastifyInstance } from "fastify";
import { getTest } from "./getTest.js";

function routes(fastify: FastifyInstance){
    fastify.get('/', getTest);
}

export { routes as testRoutes };