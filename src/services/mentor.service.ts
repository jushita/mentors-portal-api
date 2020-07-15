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
        console.log(result)
        return result;
    }
}