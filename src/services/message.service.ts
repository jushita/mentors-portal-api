import { getMessageRepository } from '../database/index'
import { Mentee } from '../models/mentee';
import { Message } from '../models/message';
import { FindManyOptions } from 'typeorm';

export class MessageService {
    public messageRepository = getMessageRepository();
    constructor() {
    }

    public async create(newMessage: Message) {
        try {
            await this.messageRepository.save(newMessage);
        } catch(e) {
            throw e;
        }
    }

    public async getAll(options: FindManyOptions<Message>) {
        let result;
        try {
            result = await this.messageRepository.find(options);
            return result;
        } catch(e) {
            throw e;
        }
    }

    public async getOne(id: number) {
        let result;
        try {
            result = await this.messageRepository.findOne(id);
            return result;
        } catch (e) {
            throw e;
        }
    }

    public async delete(id: number) {
        let message = await this.getOne(id);
        try {
            await this.messageRepository.remove(message);
        } catch (e) {
            throw e;
        }        
    }

    public async getAllMessage(mentee: Mentee) {
        let messages;
        try {
            messages = await this.messageRepository.find({mentee});
            return messages;
        } catch(e) {
            throw e;
        }
    }
}