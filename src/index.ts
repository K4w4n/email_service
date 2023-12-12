import express, {Request, Response} from "express";
import { NODE_DOCKER_PORT } from "./config";

const app = express();

app.get('/', (_req: Request, res: Response) => {
    res.json({message: "Opa"});
});

app.listen(NODE_DOCKER_PORT, () => {
    console.log(`Listening in port ${NODE_DOCKER_PORT}`)
});