import type { FastifyReply, FastifyRequest } from "fastify";
import { postLog } from "../routes/discord/postLog.js";

export function logger(req: FastifyRequest, reply: FastifyReply){
    const { ip, method, port, url } = req;
    const { statusCode } = reply;
    const log =`[ ${ip} - ${method} - ${formataStatusCode(statusCode)} - ${port}${url} ]`;
    const logDiscord =`[ ${ip} - ${method} - ${statusCode} - ${port}${url} ]`;
    console.log(log)
    return postLog(logDiscord);
}

function formataStatusCode(status: number){
    const cor =
        status >= 500 ? 30
            : status >= 400 ? 33
                : status >= 300 ? 36
                    : status >= 200 ? 32
                        : 0;

    return `\x1b[${cor}m${status}\x1b[0m`;
}