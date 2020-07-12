import { connect } from './database';
import { Logger } from './services/logger';
import * as https from 'https';

// Initialize logger
const LOGGER = Logger.getLogger();
Logger.configure({
    appenders: {
        out: {
            type: 'stdout'
        }
    },
    categories: {
        default: {
            appenders: ['out'],
            level: process.env.LOG_LEVEL || 'debug'
        }
    }
});

LOGGER.info(`Version: ${process.version}`);
LOGGER.info('Initializing server');

const http = require('http');
const hostname = 'localhost';
const port = 3000;

connect(() => {
    const app = require('./app');
    const server = http.createServer(app).listen(3000); 
    server.on('error', function(err: any) {
        LOGGER.error(`ERROR! Couldn't start server, ${err}`);
    });
    LOGGER.info(`Application started: ${hostname}:${port}`);
}); 

