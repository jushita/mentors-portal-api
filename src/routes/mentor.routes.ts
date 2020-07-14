import * as express from 'express';
import { Response } from 'express';
import { Logger } from "../services/logger";
import { Router, Request } from "../typings";
import { Mentor } from '../models/mentor';

const LOGGER = Logger.getLogger('MentorRoutes');

export class MentorRoutes {
    public static routes(): Router {
        LOGGER.info('Setting up auth routes');
        let routes: MentorRoutes = new this(express.Router());
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
        this.router.get('/', (req: Request, res: Response) => {
            try {

            } catch(e) {

            }

            res.status(200).json();
        });

        this.router.post('/', (req: Request, res: Response) => {
            let name: string = req.body.name;
            let newMentor = new Mentor(name);

            // call service 
        })
    }
}