import { Test, TestingModule } from '@nestjs/testing';
import { CicloFasesService } from './ciclo-fases.service';

describe('CicloFasesService', () => {
  let service: CicloFasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CicloFasesService],
    }).compile();

    service = module.get<CicloFasesService>(CicloFasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
