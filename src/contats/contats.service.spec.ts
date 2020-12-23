import { Test, TestingModule } from '@nestjs/testing';
import { ContatsService } from './contats.service';

describe('ContatsService', () => {
  let service: ContatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContatsService],
    }).compile();

    service = module.get<ContatsService>(ContatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
