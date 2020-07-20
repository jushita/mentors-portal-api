import * as express from 'express';
import { Response } from 'express';
import * as ws from 'express-ws';
import * as morgan from 'morgan';
import * as cors from "cors";
import { requestLogger } from './middleware/request-logger.middleware';
import { generateRequestId } from './middleware/uuid.middleware';
import { Logger } from './services/logger';
import { Request } from './typings';
import { environment } from './environment'
const context = require('express-cls-hooked');


// STARTIMPORTS //
import { AuthRoutes } from './routes/auth.routes';
import { ColorSupport } from 'chalk';
import { MentorRoutes } from './routes/mentor.routes';
import { MenteeRoutes } from './routes/mentee.routes';
import { MessageRoutes } from './routes/message.routes';
// ENDIMPORTS //



// Set a new morgan token
morgan.token('id', (req: Request, res: Response) => {
    return req.id;
});

// Create root app
const wss = ws(express());
const app = wss.app;


const options: cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "x-auth-token", "fileName"],
    exposedHeaders: ["fileName"],
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: environment.env.origin,
    preflightContinue: false
}
// Setup default middleware
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(context.middleware);
app.use(generateRequestId());
app.use(requestLogger());

// STARTMIDDLEWARE //
// ENDMIDDLEWARE //

app.get('/', (req: Request, res: Response) => {
    res.send('Hi Welcome to Mentor\'s Portal');
});
// STARTROUTES //
app.use(AuthRoutes.routes());
app.use('/mentor', MentorRoutes.routes());
app.use('/mentee', MenteeRoutes.routes());
app.use('/message', MessageRoutes.routes());

// ENDROUTES //

// Export the app (this makes setting up testing easier)
export default app;
module.exports = app;