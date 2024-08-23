import {CorsOptions} from 'cors';
import config from '../utils/configuration.utils';

const corsOptions:CorsOptions = {
    origin: config.allowedOrigins, // allowed origin lists
    methods: ['GET','POST', 'PUT', 'DELETE', 'PATCH'], //allowed Http methods
    allowedHeaders:['Content-Type', 'Authorization'], //allowed headers
    credentials: true, //allow credentials(cookies, authorization headers, etc.)
    optionsSuccessStatus:200 //Status for successfu; OPTIONS requests
}

export default corsOptions;