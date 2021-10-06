import { Test, TestingModule } from '@nestjs/testing';
import { CicloFilesService } from './ciclo-files.service';

describe('CicloFilesService', () => {
  let service: CicloFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CicloFilesService],
    }).compile();

    service = module.get<CicloFilesService>(CicloFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
