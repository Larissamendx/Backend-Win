import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { getRepository, Repository } from 'typeorm';
import { CreateCicloDto } from './dto/create-ciclo.dto';
import { UpdateCicloDto } from './dto/update-ciclo.dto';
import { Ciclos } from './entities/ciclos.entity';

@Injectable()
export class CiclosService {
  constructor(
    @InjectRepository(Ciclos)
    private ciclosRepository: Repository<Ciclos>,
  ) {}
   

//   const ciclosExists = this.ciclos.find((user) => ciclos.name === name);

//   if (ciclosExists) {
//     return 'Esse ciclo ja existe';
//   }

//   this.ciclos.push(ciclos);

//   return ciclos;
// }

async create(data: CreateCicloDto): Promise<ResultadoDto>{
  const {name, ticker } = data;
  const qb = await getRepository(Ciclos)
    .createQueryBuilder('ciclos')
    .where('ciclos.name = :name', { name })
    .orWhere('ciclos.ticker = :ticker', {ticker })

  const ciclo = await qb.getOne();

  if (ciclo) {
    const errors = {username: 'Username and email must be unique.'};
    console.log(errors)

  }
    
  let ciclos = new Ciclos()
    ciclos.percentage = data.percentage
    ciclos.name = data.name 
    ciclos.description = data.description
    ciclos.ticker  = data.ticker
    ciclos.price_unity  = data.price_unity
    ciclos.unity = data.unity
    ciclos.whitepaper = data.whitepaper
    ciclos.status = data.status
    ciclos.status_message  = data.status_message
    ciclos.date_start = data.date_start
    ciclos.date_end = data.date_end
    ciclos.qtd_total_unity = data.qtd_total_unity
    ciclos.asset_amount = data.asset_amount
    ciclos.profitability = data.profitability
    ciclos.token_type = data.token_type
    ciclos.token_contract = data.token_contract
    ciclos.logo  = data.logo
    ciclos.slug = data.slug
    ciclos.location = data.location
    ciclos.buy_qtd_min = data.buy_qtd_min
    ciclos.buy_qtd_max = data.buy_qtd_max
    ciclos.public = data.public
    return this.ciclosRepository.save(ciclos)
    .then((result) => {
      console.log(ciclos)
      return <ResultadoDto>{
        status: true,
        mensagem: "Ciclo cadastrado com sucesso"
      }
    })
    .catch((error) => {
      console.log(error)
      console.log(data)
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um erro ao cadastrar o ciclo"
      }
    })    
}


findAll(): Promise<Ciclos[]> {
  return this.ciclosRepository.find();
}

findOne(id: string): Promise<Ciclos> {
  return this.ciclosRepository.findOne(id);
}

// update(id: number,  UpdateCicloDto: UpdateCicloDto) {
//   const ciclo = this.ciclosRepository.findOne(id);

//   const newCiclo: Ciclos = {
//     ...ciclo,
//     ...UpdateCicloDto,
//   };
  
//   const findIndex = this.ciclosRepository.findIndex((ciclo) => Number(ciclo.uid) === id);
//   this.ciclosRepository[findIndex] = newCiclo;

//   return ciclo;
// }

async update(id: number, data: UpdateCicloDto): Promise<Ciclos> {
  let toUpdate = await this.ciclosRepository.findOne(id);

  let updated = Object.assign(toUpdate, data);
  return await this.ciclosRepository.save(updated);
}

async remove(id: string): Promise<void> {
  await this.ciclosRepository.delete(id);
}
}