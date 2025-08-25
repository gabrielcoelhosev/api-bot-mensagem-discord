import { canal } from "../discord.js";

export async function enviarMensagem(texto: string){
    if(!canal){
        throw new Error('Erro ao encontrar canal de texto');
    }

    return canal?.send(texto);
}