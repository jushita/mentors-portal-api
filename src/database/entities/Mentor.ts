import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Mentor {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

}