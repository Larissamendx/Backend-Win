import { Test, TestingModule } from '@nestjs/testing';
import { CicloFilesController } from './ciclo-files.controller';
import { CicloFilesService } from './ciclo-files.service';

describe('CicloFilesController', () => {
  let controller: CicloFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CicloFilesController],
      providers: [CicloFilesService],
    }).compile();

    controller = module.get<CicloFilesController>(CicloFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
