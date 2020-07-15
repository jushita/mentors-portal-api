import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Mentor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

}