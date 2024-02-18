import { Module } from '@nestjs/common';
import { CwSsTmepnpkModule } from './cw_ss_tmepnpk/cw_ss_tmepnpk.module';
import { CwSsTmepnpkController } from './cw_ss_tmepnpk/cw_ss_tmepnpk.controller';

@Module({
  imports: [CwSsTmepnpkModule],
  exports: [CwSsTmepnpkModule],
})
export class SoilSensorModule {}
