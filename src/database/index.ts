import { createConnection, getConnection } from 'typeorm';
import { Logger } from '../services/logger';
import { Mentor } from './entities/Mentor';
import { Mentee } from './entities/Mentee';
import { Message } from './entities/Message';

const LOGGER = Logger.getLogger('Database');

export function connect(cb: any) {
    LOGGER.info('Connecting to database');
    LOGGER.info(`Host: localhost`);
    createConnection({
        type: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'amrashobairaja',
        entities: [Mentor, Mentee, Message],
        synchronize: true,
        logging: false
    })
        .then(async connection => {
            // here you can start to work with your entities
            LOGGER.info('Connected to database');
            cb();


        })
        .catch(error => {
            LOGGER.error(error);
            process.exit(1);
        });
}


export function getMentorRepository() {
    return getConnection().manager.getRepository(Mentor);
}

export function getMenteeRepository() {
    return getConnection().manager.getRepository(Mentee)
}

export function getMessageRepository() {
    return getConnection().manager.getRepository(Message);
}