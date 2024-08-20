import dotenv from 'dotenv';

//[Load environment variable from .env files]
dotenv.config();

interface Config{
    port: number,
    databaseUrl: string,
    accessTokenSecret: string
};

const config:Config = {
    port: parseInt(process.env.PORT as string) || 8000,
    databaseUrl: process.env.DATABASE_URL as string,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET as string
}

export default config;