import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity()
export class CicloFiles {
    @PrimaryColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    size: string;

    @Column()
    path: string;

    @Column()
    name: string;
    
    @Column()
    is_image: number;
}
