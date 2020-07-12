import { createConnection } from 'typeorm';
import { Logger } from '../services/logger';

const LOGGER = Logger.getLogger('Database');

export function connect(cb: any) {
    LOGGER.info('Connecting to database');
    LOGGER.info(`Host: localhost`);
    createConnection({
        type: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'amrashobairaja',
        entities: [],
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
