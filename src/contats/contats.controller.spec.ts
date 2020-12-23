import { Test, TestingModule } from '@nestjs/testing';
import { ContatsController } from './contats.controller';

describe('ContatsController', () => {
  let controller: ContatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContatsController],
    }).compile();

    controller = module.get<ContatsController>(ContatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
