import { Test, TestingModule } from '@nestjs/testing';
import { CicloFasesController } from './ciclo-fases.controller';
import { CicloFasesService } from './ciclo-fases.service';

describe('CicloFasesController', () => {
  let controller: CicloFasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CicloFasesController],
      providers: [CicloFasesService],
    }).compile();

    controller = module.get<CicloFasesController>(CicloFasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
