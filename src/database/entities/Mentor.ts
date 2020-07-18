import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Mentor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}