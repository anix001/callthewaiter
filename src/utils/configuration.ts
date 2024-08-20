import dotenv from 'dotenv';

//[Load environment variable from .env files]
dotenv.config();

interface Config{
    port: number,
    databaseUrl: string,
    accessTokenSecret: string,
    saltRound: number
};

const config:Config = {
    port: parseInt(process.env.PORT as string) || 8000,
    databaseUrl: process.env.DATABASE_URL as string,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET as string,
    saltRound: parseInt(process.env.SALT_ROUND as string) || 10
}

export default config;