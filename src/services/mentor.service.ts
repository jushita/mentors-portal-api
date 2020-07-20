import { getMentorRepository } from '../database/index'
import { Mentor } from '../models/mentor';
export class MentorService {
    public mentorRepository = getMentorRepository();
    constructor() {
        
    }

    public async create(newMentor: Mentor) {
        try {
            await this.mentorRepository.save(newMentor);
        } catch (e) {
            throw e;
        }
    }

    public async getAll() {
        let result;
        try {
            result = await this.mentorRepository.find();
        } catch (e) {
            throw e;
        }
        return result;
    }

    public async getOne(id: number) {
        let result;
        try {
            result = await this.mentorRepository.findOne(id);
        } catch (e) {
            throw e;
        }
        return result;
    }

    public async delete(id: number) {
        let mentor = await this.getOne(id);
        try {
            await this.mentorRepository.remove(mentor);
        } catch (e) {
            throw e;
        }   
    }
}