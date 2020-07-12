import { connect } from './database';
import { Logger } from './services/logger';
import * as https from 'https';


const app = require('./app');

const LOGGER = Logger.getLogger();

LOGGER.info(`Version: ${process.version}`);
LOGGER.info('Initializing server');

const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer(app).listen(3000); 
server.on('error', function(err: any) {
    console.log('Error happened', err);
})
LOGGER.info(`Application started: ${hostname}:${port}`);