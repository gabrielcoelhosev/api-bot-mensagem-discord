import fastify from "fastify";
import { routes } from "./routes/index.js";
import { logger } from "./middlewares/logger.js";

export const app = fastify();
app.addHook('onResponse', logger);
app.register(routes);