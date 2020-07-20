import { Mentee } from "./mentee";

export class Message {
    public id: number;
    public type: string;
    public date: Date;
    public message: string;
    public mentee: Mentee

    constructor(type: string, date: Date, message: string, mentee: Mentee) {
            this.type = type;
            this.date = date;
            this.message = message;
            this.mentee = mentee;
    }
}