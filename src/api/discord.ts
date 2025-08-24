import { Client, GatewayIntentBits, TextChannel } from "discord.js";
import { env } from "../env/index.js";

export const discordClient = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

export let canal: TextChannel | null = null;

discordClient.login(env.DISCORD_BOT_TOKEN);

discordClient.once("clientReady", async () => {
    console.log(`🤖 Bot logado como ${discordClient.user?.tag}`);

    try {
        const fetched = await discordClient.channels.fetch(env.CHANNEL_ID);

        if (!fetched || !fetched.isTextBased()) {
            console.log("Canal não encontrado ou não é de texto");
            return;
        }

        if (fetched instanceof TextChannel) {
            canal = fetched;
            console.log(`Canal encontrado: ${fetched.name}`);
        } else {
            console.log("O canal é de outro tipo de texto (ex: DM, thread, etc).");
        }
    } catch (err) {
        console.error("Erro ao buscar canal:", err);
    }
});


export async function enviarMensagem(texto: string){
    if(!canal){
        throw new Error('Erro ao encontrar canal de texto');
    }

    return canal?.send(texto);
}