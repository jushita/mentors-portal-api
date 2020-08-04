import * as express from 'express';
import { Response } from 'express';
import { Logger } from '../services/logger';
import { JWTService } from '../services/jwt.service';
import { Request, Router } from '../typings';
import { environment } from '../environment'

const LOGGER = Logger.getLogger('AuthRoutes');
const authMicrosericeURL = environment.authMicrosericeURL.origin


export class AuthRoutes {
    public static routes(): Router {
        LOGGER.info('Setting up auth routes');
        let routes: AuthRoutes = new this(express.Router());
        routes.bootstrap();
        return routes.getRouter();
    }

    private readonly router: Router;

    private constructor(router: Router) {
        this.router = router;
    }

    public getRouter(): Router {
        return this.router;
    }

    private bootstrap(): void {
        // TODO: Update with custom login functionality
        this.router.post('/login', (req: Request, res: Response) => {
            let token;
            try {
                this.router.get(authMicrosericeURL+ '/', async(req: Request, res: Response) => {
                    const name = req.body.name;
                    const password = req.body.password;
                    res.send({name: name, password: password});

                });
            } catch(e) {
                LOGGER.error(e)
            }
            console.log('sending req')
            res.status(200).json({ token });
        });

        this.router.post(authMicrosericeURL+ '/login', async(req: Request, res: Response) => {
            const username = req.body.name;
            const password = req.body.password;
            if (!username || username === '') {
                return res.status(400).json({ message: 'InvalidRequest' });
            }
            if (!password || password === '') {
                return res.status(400).json({ message: 'InvalidRequest' });
            }
        });
    }
}
