import { enviarMensagem } from "../../api/discord.js";

export async function postLog(logger: string){
    const log = await enviarMensagem(logger);

    if(!log){
        throw new Error('Erro ao enviar mensagem para o Discord');
    }
}