import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository, getRepository } from 'typeorm';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/users.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async create(data: CreateUsersDto): Promise<ResultadoDto>{
      // check uniqueness of username/email
      const {email} = data;
      const qb = await getRepository(Users)
        .createQueryBuilder('users')
        .where('users.email = :email', { email })
  
      const user = await qb.getOne();
  
      if (user) {
        const errors = {username: 'Username and email must be unique.'};
        console.log("")
      }
    
    let users = new Users()
    users.email = data.email
    users.name = data.name
    users.password = data.password
    users.cpf = data.cpf
    users.rg = data.rg
    users.access = data.access
    users.token = data.token
    users.img = data.img
    users.tag = data.tag
    users.gender = data.gender
    users.created = data.created
    users.first_access = data.first_access
    users.last_login = data.last_login
    users.compliance_approved = users.compliance_approved
    users.address = data.address
    users.doc_front = data.doc_front
    users.doc_back = data.doc_back
    users.doc_rendimento = data.doc_rendimento
    
    return this.usersRepository.save(users)
    .then((result) => {
      console.log(users)
      return <ResultadoDto>{
        status: true,
        mensagem: "Usuário cadastrado com sucesso"
      }
    })
    .catch((error) => {
      console.log(error)
      console.log(data)
      return <ResultadoDto>{
        status: false,
        mensagem: error
      }
    })    
  }
  

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Users> {
    return this.usersRepository.findOne(id);
  }

  // update(id: string, updateUserDto: UpdateUserDto) {
  //   const user = this.usersRepository.findOne(id);
    
  //   const newUser: Users = {
  //     ...user,
  //     ...updateUserDto,
  //   };
    
  //   const findIndex = this.usersRepository.findIndex((user) => user.uid === id);
  //   this.users[findIndex] = newUser;

  //   return newUser;
  // }

  async update(id: number, data: UpdateUserDto): Promise<Users> {
    let toUpdate = await this.usersRepository.findOne(id);

    let updated = Object.assign(toUpdate, data);
    return await this.usersRepository.save(updated);
  }


  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
