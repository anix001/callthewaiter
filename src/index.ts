import express, {Express, Request, Response} from "express";

import v1Routes from "./routes/v1"
import config from "./utils/configuration";

const app:Express = express();
const port = config.port;

//[for json parse]
app.use(express.json());

//versioning Routes
app.use("/api/v1", v1Routes);

app.get('/', (req:Request, res:Response)=>{
    res.send("Express + Typescript Boilerplate");
});

app.listen(port, ()=>{
    console.log(`[server]: Server is running on port ${port}!!`);
});

