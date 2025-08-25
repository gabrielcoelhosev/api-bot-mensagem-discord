import { canal } from "../discord.js";

export async function lerMensagem(limite: number){
    if(!canal){
        throw new Error('Erro ao encontrar canal de texto');
    }

    const mensagens = await canal.messages.fetch({
        limit: limite
    });
    

    return mensagens;
}