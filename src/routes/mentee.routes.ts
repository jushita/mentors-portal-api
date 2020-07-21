import * as express from 'express';
import { Logger } from "../services/logger";
import { Response } from "express";
import { Router, Request } from "../typings";
import { MenteeService } from "../services/mentee.service";
import { Mentee } from '../models/mentee';

const LOGGER = Logger.getLogger('MenteeRoutes');

export class MenteeRoutes {
    public static routes(): Router {
        LOGGER.info('Setting up mentee routes');
        let routes: MenteeRoutes = new this(express.Router());
        routes.bootstrap();
        return routes.getRouter();
    }

    private readonly router: Router;
    public menteeService: MenteeService;

    private constructor(router: Router) {
        this.router = router;
        this.menteeService = new MenteeService();
    }

    public getRouter(): Router {
        return this.router; 
    }

    private bootstrap(): void {
        this.router.get('/', async (req: Request, res: Response) => {
            let result;
            try {
                result = await this.menteeService.getAll();
            } catch(e) {
                LOGGER.error(e);
            }

            res.status(200).json(result);
        });

        this.router.get('/:id', async (req: Request, res: Response) => {
            let result;
            let id = req.params.id;
            try {
                result = await this.menteeService.getOne(id);
            } catch(e) {
                LOGGER.error(e);
            }

            res.status(200).json(result);
        });

        this.router.post('/', async (req: Request, res: Response) => {
            let name: string = req.body.name;
            let status: string = req.body.status;
            let joiningDate: Date = req.body.joiningDate;
            let marketLaunchDate: Date = req.body.marketLaunchDate;

            let newMentor = new Mentee(name, status, joiningDate, marketLaunchDate);
            
            try {
                await this.menteeService.create(newMentor);
            } catch(e) {
                LOGGER.error(e);
                throw e;
            }

            res.status(200).json('Successfully posted');

            // call service 
        });

        this.router.delete('/:id', async (req: Request, res: Response) => {
            let id: string = req.params.id;
            try {
                await this.menteeService.delete(id);
            } catch(e) {
                LOGGER.error(e);
            }
            res.status(200).json(`Successfully deleted id: ${id}`)
        });


    }
}