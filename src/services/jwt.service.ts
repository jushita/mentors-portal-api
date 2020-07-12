import * as jwt from 'jsonwebtoken';
import { JWTPayload } from '../models/jwt-payload';
import { Logger } from '../services/logger';

const LOGGER = Logger.getLogger('JWTService');
const SECRET =
    'd92f4e33329a1c5ba1a06a66c000cfedb7ad117133af11c838bb995fa41c2e16';

export class JWTService {
    public static generateToken(payload: JWTPayload): string {
        return jwt.sign(payload, SECRET, {
            expiresIn: 60 * 60 * 24
        });
    }

    public static verify(token: string): JWTPayload {
        let decoded: JWTPayload;

        try {
            decoded = jwt.verify(token, SECRET) as JWTPayload;
        } catch (e) {
            LOGGER.error(e);
            throw e;
        }

        return decoded;
    }
}
