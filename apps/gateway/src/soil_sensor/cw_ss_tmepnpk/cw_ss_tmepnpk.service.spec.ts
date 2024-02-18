import { Test, TestingModule } from '@nestjs/testing';
import { CwSsTmepnpkService } from './cw_ss_tmepnpk.service';

describe('CwSsTmepnpkService', () => {
  let service: CwSsTmepnpkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CwSsTmepnpkService],
    }).compile();

    service = module.get<CwSsTmepnpkService>(CwSsTmepnpkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
