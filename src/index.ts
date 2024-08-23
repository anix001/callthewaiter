import express, {Express, Request, Response} from "express";
import cors from "cors";

import v1Routes from "./routes/v1"
import config from "./utils/configuration";
import corsOptions from "./middleware/cors";

const app:Express = express();
const port = config.port;

//[for json parse]
app.use(express.json());
//[for cors]
app.use(cors(corsOptions));

//versioning Routes
app.use("/api/v1", v1Routes);

app.get('/', (req:Request, res:Response)=>{
    res.send("Express + Typescript Boilerplate");
});

app.listen(port, ()=>{
    console.log(`[server]: Server is running on port ${port}!!`);
});

