export class User {
    public name: string;
    public password: string;
    public token?: string;
    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }
}