import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { Message } from "./Message";

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

    @OneToMany(type => Message, message => message.mentee)
    @JoinColumn()
    messages: Message[]

}