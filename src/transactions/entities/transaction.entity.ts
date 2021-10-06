import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Transactions {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_ciclo: number;

    @Column()
    uid_buyer: number;

    @Column()
    date: string;

    @Column()
    qtd_token: number;

    @Column()
    token_id: number;

    @Column()
    status: number;

    @Column()
    ticker: string;

    @Column()
    amount: number;

    @Column()
    desc: string;

}
