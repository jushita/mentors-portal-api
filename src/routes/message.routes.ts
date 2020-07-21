import * as express from 'express';
import { Response } from 'express';
import { Logger } from '../services/logger';
import { Router, Request } from "../typings";
import { MessageService } from '../services/message.service';
import { Message } from '../models/message';
import { Mentee } from '../models/mentee';
import { MenteeService } from '../services/mentee.service';

const LOGGER = Logger.getLogger('MessageRoutes');

export class MessageRoutes {
    public static routes(): Router {
        LOGGER.info('Setting up Message Routes');
        let routes: MessageRoutes = new this(express.Router());
        routes.bootstrap();
        return routes.getRouter();
    }

    private router: Router;
    private messageService: MessageService;
    private menteeService: MenteeService;
    
    public getRouter() {
        return this.router;
    }

    constructor(router: Router) {
        this.router = router;
        this.messageService = new MessageService();
        this.menteeService = new MenteeService();
    }

    private bootstrap(): void {
        this.router.get('/', async (req: Request, res: Response) => {
            let options: any = {};
            let mentee: Mentee;
            if (req.query.menteeId) {

                try {
                    mentee = await this.menteeService.getOne(req.query.menteeId as string);
                    options.mentee = mentee;
                } catch(e) {
                    LOGGER.error(e);
                }
            }
            let result: Message[];
            try {
                result = await this.messageService.getAll(options);
            } catch(e) {
                LOGGER.error(e);
            }

            res.status(200).json(result);
        });

        this.router.get('/:id', async (req: Request, res: Response) => {
            let result;
            let id = req.params.id;
            try {
                result = await this.messageService.getOne(parseInt(id));
            } catch(e) {
                LOGGER.error(e);
            }

            res.status(200).json(result);
        });

        this.router.post('/', async (req: Request, res: Response) => {
            let type: string = req.body.type;
            let date: Date = req.body.date;
            let message: string = req.body.message;
            let mentee: Mentee = req.body.mentee

            let newMessage = new Message(type, date, message, mentee);
            try {
                await this.messageService.create(newMessage);
            } catch(e) {
                LOGGER.error(e);
                throw e;
            }

            res.status(200).json('Successfully posted');
            // call service 
        });

        this.router.delete('/:id', async (req: Request, res: Response) => {
            let id: any = req.params.id;
            try {
                await this.messageService.delete(id);
            } catch(e) {
                LOGGER.error(e);
            }
            res.status(200).json(`Successfully deleted id: ${id}`)
        });    
    }
}