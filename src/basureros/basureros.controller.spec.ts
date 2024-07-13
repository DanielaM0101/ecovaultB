import { Test, TestingModule } from '@nestjs/testing';
import { BasurerosController } from './basureros.controller';
import { BasurerosService } from './basureros.service';

describe('BasurerosController', () => {
  let controller: BasurerosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasurerosController],
      providers: [BasurerosService],
    }).compile();

    controller = module.get<BasurerosController>(BasurerosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
