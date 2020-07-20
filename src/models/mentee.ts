export class Mentee {
    public id?: number;
    public name: string;
    public status: string;
    public joiningDate: Date;
    public marketLaunchDate: Date
    constructor(name: string, status: string, 
                joiningDate: Date, marketLaunchDate: Date) {
        this.name = name;
        this.status = status;
        this.joiningDate = joiningDate;
        this.marketLaunchDate = marketLaunchDate;

    }
}