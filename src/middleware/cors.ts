import {CorsOptions} from 'cors';

const corsOptions:CorsOptions = {
    origin: ['http://localhost:3000/', 'http://localhost:8000/',], // allowed origin lists
    methods: ['GET','POST', 'PUT', 'DELETE', 'PATCH'], //allowed Http methods
    allowedHeaders:['Content-Type', 'Authorization'], //allowed headers
    credentials: true, //allow credentials(cookies, authorization headers, etc.)
    optionsSuccessStatus:200 //Status for successfu; OPTIONS requests
}

export default corsOptions;