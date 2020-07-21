import { getMenteeRepository } from '../database/index'
import { Mentee } from '../models/mentee';

export class MenteeService {
    public menteeRepository = getMenteeRepository();
    constructor() {

    }

    public async create(newMentee: Mentee) {
        try {
            await this.menteeRepository.save(newMentee);
        } catch(e) {
            throw e;
        }
    }

    public async getAll() {
        let result;
        try {
            result = await this.menteeRepository.find();
            return result;
        } catch(e) {
            throw e;
        }
    }

    public async getOne(id: string) {
        let result;
        try {
            result = await this.menteeRepository.findOne(id);
            return result;
        } catch (e) {
            throw e;
        }
    }

    public async delete(id: string) {
        let mentee = await this.getOne(id);
        try {
            await this.menteeRepository.remove(mentee);
        } catch (e) {
            throw e;
        }
        
    }

}