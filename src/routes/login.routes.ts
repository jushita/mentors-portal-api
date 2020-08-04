import * as express from 'express';
import { Response } from 'express';
import { Logger } from "../services/logger";
import { Router, Request } from "../typings";
import { environment } from '../environment'


const LOGGER = Logger.getLogger('LoginRoutes')
const authMicrosericeURL = environment.authMicrosericeURL.origin

export class LoginRoutes {
    public static routes(): Router {
        LOGGER.info('Setting up login routes');
        let routes: LoginRoutes = new this(express.Router());
        routes.bootstrap();
        return routes.getRouter();
    }

    private readonly router: Router;
    

    public getRouter(): Router {
        return this.router;
    }

    private constructor(router: Router) {
        this.router = router;
    }


    private bootstrap(): void {
        this.router.post(authMicrosericeURL+ '/login', async(req: Request, res: Response) => {

        });

        
    }
}