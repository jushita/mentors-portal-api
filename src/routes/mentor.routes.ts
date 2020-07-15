import * as express from 'express';
import { Response } from 'express';
import { Logger } from "../services/logger";
import { Router, Request } from "../typings";
import { Mentor } from '../models/mentor';
import { MentorService } from '../services/mentor.service';

const LOGGER = Logger.getLogger('MentorRoutes');

export class MentorRoutes {
    public static routes(): Router {
        LOGGER.info('Setting up auth routes');
        let routes: MentorRoutes = new this(express.Router());
        routes.bootstrap();
        return routes.getRouter();
    }

    private readonly router: Router;
    public mentorService: MentorService;

    private constructor(router: Router) {
        this.router = router;
        this.mentorService = new MentorService();
    }


    public getRouter(): Router {
        return this.router;
    }

    private bootstrap(): void {
        this.router.get('/', async (req: Request, res: Response) => {
            let result;
            try {
                result = await this.mentorService.getAll();
            } catch(e) {
                LOGGER.error(e);
            }

            res.status(200).json(result);
        });

        this.router.post('/', async (req: Request, res: Response) => {
            let firstName: string = req.body.firstName;
            let lastName: string = req.body.lastName;
            let newMentor = new Mentor(firstName, lastName);
            try {
                await this.mentorService.create(newMentor);
            } catch(e) {
                LOGGER.error(e);
                throw e;
            }

            res.status(200).json('Successfully posted');

            // call service 
        });
    }
}