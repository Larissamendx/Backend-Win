import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    uid: number;

    @Column('text')
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    access: number;
    
    @Column()
    token: string;

    @Column()
    img: string;

    @Column()
    tag: string;
    
    @Column()
    gender: string;

    @Column()
    created: string;
    
    @Column()
    first_access: number;

    @Column()
    last_login: string;

    @Column()
    compliance_approved: number;

    @Column()
    address: string;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @Column()
    doc_front: string;

    @Column()
    doc_back: string;

    @Column()
    doc_rendimento: string; 

}