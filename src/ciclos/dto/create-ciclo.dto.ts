import { IsString, IsNumber, MaxLength, MinLength } from 'class-validator'

export class CreateCicloDto {
    id: number;
    percentage: number;
    name: string;
    desc: string;
    ticker: string;
    price_unity: number; 
    unity: number;
    whitepaper: string;
    status: number;
    status_message: string;
    date_start: string;
    date_end: string;
    qtd_total_unity: number;
    asset_amount: number;
    profitability: string;
    token_type: string;
    token_contract: string;
    logo: string;
    slug: string;
    location: string;
    buy_qtd_min: number;
    buy_qtd_max: number;
    public: number;
}

