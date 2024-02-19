import { Module } from '@nestjs/common';
import { CwDevicesService } from './cw_devices.service';
import { CwDevicesController } from './cw_devices.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CwDevicesController],
  providers: [CwDevicesService],
})
export class CwDevicesModule {}
