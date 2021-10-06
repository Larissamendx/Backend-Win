import { Connection, Repository } from 'typeorm';
import { Transactions } from './entities/transaction.entity';

export const transactionsProviders = [
  {
    provide: 'TRANSACTIONS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Transactions),
    inject: ['DATABASE_CONNECTION'],
  },
];