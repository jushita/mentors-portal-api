import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Mentee } from "./Mentee";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    date: Date

    @Column()
    message: string

    @ManyToOne(type => Mentee)
    @JoinColumn({name: 'menteeId'})
    mentee: Mentee;
}

