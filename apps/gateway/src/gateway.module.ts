import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { SoilSensorModule } from './soil_sensor/soil_sensor.module';
import { CwSsTmepnpkModule } from './soil_sensor/cw_ss_tmepnpk/cw_ss_tmepnpk.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { CwDevicesModule } from './cw_devices/cw_devices.module';
@Module({
  imports: [
    SoilSensorModule,
    CwSsTmepnpkModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 20
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100
      }
    ]),
    PrismaModule,
    CwDevicesModule,
  ],
  controllers: [GatewayController],
  providers: [
    GatewayService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
    
  ],
})
export class GatewayModule { }
