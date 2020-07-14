import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("MENTOR") 
export class Mentor {
    @PrimaryGeneratedColumn({name: 'ID'})
    id: number;

    @Column("varchar", {name: "NAME", length: 256 })
    name: string;

    @Column("varchar", { name: "PASSWORD", length: 256})
    password: string;
}