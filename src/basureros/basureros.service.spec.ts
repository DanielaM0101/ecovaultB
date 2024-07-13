import { Test, TestingModule } from '@nestjs/testing';
import { BasurerosService } from './basureros.service';

describe('BasurerosService', () => {
  let service: BasurerosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasurerosService],
    }).compile();

    service = module.get<BasurerosService>(BasurerosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
