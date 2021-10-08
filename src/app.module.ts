import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CiclosModule } from './ciclos/ciclos.module';
import { TransactionsModule } from './transactions/transactions.module';
import { CicloFasesModule } from './ciclo-fases/ciclo-fases.module';
import { CicloFilesModule } from './ciclo-files/ciclo-files.module';
import { AccessCodeModule } from './access-code/access-code.module';
import { LogModule } from './log/log.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [UsersModule,
            CiclosModule, 
            TypeOrmModule.forRoot(), 
            TransactionsModule, 
            CicloFasesModule, 
            CicloFilesModule, 
            AccessCodeModule, 
            LogModule, 
            MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
