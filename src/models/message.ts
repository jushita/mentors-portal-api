export class Message {
    public id: number;
    public menteeId: number;
    public type: string;
    public date: Date;
    public message: string;

    constructor(id: number, menteeId: number, 
        type: string, date: Date, message: string) {
            this.id = id;
            this.menteeId = menteeId;
            this.type = type;
            this.date = date;
            this.message = message;
    }
}