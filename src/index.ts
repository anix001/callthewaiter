import express, {Express, Request, Response} from "express";
import cors from "cors";

import v1Routes from "./routes/v1"
import config from "./utils/configuration.utils";
import { corsOptions, errorHandler, logger } from "./middleware";


const app:Express = express();
const port = config.port;

//[for json parse]
app.use(express.json());
//[for cors]
app.use(cors(corsOptions));
//[for logging message]
app.use(logger);

//versioning Routes
app.use("/api/v1", v1Routes);

app.get('/', (req:Request, res:Response)=>{
    res.send("Express + Typescript Boilerplate");
});

//[error middleware]
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`[server]: Server is running on port ${port}!!`);
});

