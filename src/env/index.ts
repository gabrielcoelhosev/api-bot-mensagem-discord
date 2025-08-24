import 'dotenv/config';
import z from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number().default(5555),
    DISCORD_BOT_TOKEN: z.string(),
    CHANNEL_ID: z.string()
});

const _env = envSchema.safeParse(process.env);

if(!_env.success){
    console.error('❌ Erro ao validar variáveis de ambiente!');
    throw new Error('Erro ao validar variáveis de ambiente!');
}

export const env = _env.data;