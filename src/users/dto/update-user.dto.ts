import { PartialType } from '@nestjs/mapped-types';
import { Users } from '../entities/users.entity';
import { CreateUsersDto } from './create-user.dto';

export interface UpdateUserDto {
    name: string,
    email: string,
    password: string,
}
