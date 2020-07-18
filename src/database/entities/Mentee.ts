import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Mentee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    status: string;

    @Column()
    joiningDate: Date;

    @Column()
    marketLaunchDate: Date;

}