import { Entity, Column, PrimaryColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { CicloFiles } from 'src/ciclo-files/entities/ciclo-file.entity';

@Entity()
export class Ciclos {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    desc: string;

    @Column()
    ticker: string;

    @Column()
    price_unity: number;

    @Column()
    percentage: number;
    
    @Column()
    unity: number;
    
    @Column()
    whitepaper: string;
    
    @Column()
    status: number;
    
    @Column()
    status_message: string;
    
    @Column()
    date_start: string;
    
    @Column()
    date_end: string;
    
    @Column()
    qtd_total_unity: number;
    
    @Column()
    asset_amount: number;
    
    @Column()
    profitability: string;
    
    @Column()
    token_type: string;
    
    @Column()
    token_contract: string;

    @Column()
    logo: string;
    
    @Column()
    slug: string;
    
    @Column()
    location: string;
    
    @Column()
    buy_qtd_min: number;
    
    @Column()
    buy_qtd_max: number;

    @Column()
    public: number;
}
