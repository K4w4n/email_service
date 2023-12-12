import dotenv from "dotenv";

// Load env's
dotenv.config();

export const NODE_DOCKER_PORT:number = Number(process.env.NODE_DOCKER_PORT) || 8080;

export const {} = process.env;