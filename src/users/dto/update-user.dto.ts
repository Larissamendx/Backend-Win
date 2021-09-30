import { PartialType } from '@nestjs/mapped-types';
import { Users } from '../entities/users.entity';
import { CreateUsersDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(Users) {}
