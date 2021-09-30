import { IsString, IsNumber, MaxLength, MinLength } from 'class-validator'

export class CreateCicloDto {
    
    @IsNumber()
    id: number;
    
    @IsNumber()
    percentage: number;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    ticker: string;

    @IsNumber()
    price_unity: number; 

    @IsNumber()
    unity: number;
    
    @IsString()
    whitepaper: string;

    @IsNumber()
    status: number;
    
    @IsString()
    status_message: string;
    
    @IsString()
    date_start: string;
    
    @IsString()
    date_end: string;

    @IsNumber()
    qtd_total_unity: number;

    @IsNumber()
    asset_amount: number;
    
    @IsString()
    profitability: string;
    
    @IsString()
    token_type: string;
    
    @IsString()
    token_contract: string;
    
    @IsString()
    logo: string;
    
    @IsString()
    slug: string;
    
    @IsString()
    location: string;
    
    @IsNumber()
    buy_qtd_min: number;
    
    @IsNumber()
    buy_qtd_max: number;

    @IsNumber()
    public: number;
}

