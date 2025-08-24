import fastify from "fastify";
import { routes } from "./routes/index.js";

export const app = fastify();
app.register(routes);