import { Test, TestingModule } from '@nestjs/testing';
import { CwSsTmepnpkController } from './cw_ss_tmepnpk.controller';
import { CwSsTmepnpkService } from './cw_ss_tmepnpk.service';

describe('CwSsTmepnpkController', () => {
  let controller: CwSsTmepnpkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CwSsTmepnpkController],
      providers: [CwSsTmepnpkService],
    }).compile();

    controller = module.get<CwSsTmepnpkController>(CwSsTmepnpkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
