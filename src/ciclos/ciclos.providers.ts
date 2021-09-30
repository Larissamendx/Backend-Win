import { Connection, Repository } from 'typeorm';
import { Ciclos } from './entities/ciclos.entity';

export const ciclosProviders = [
  {
    provide: 'CICLOS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Ciclos),
    inject: ['DATABASE_CONNECTION'],
  },
];