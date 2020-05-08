import { Test, TestingModule } from '@nestjs/testing';
import { DataReptileController } from './data-reptile.controller';

describe('DataReptile Controller', () => {
  let controller: DataReptileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataReptileController],
    }).compile();

    controller = module.get<DataReptileController>(DataReptileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
