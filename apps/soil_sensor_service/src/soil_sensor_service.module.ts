import { Module } from '@nestjs/common';
import { SoilSensorServiceController } from './soil_sensor_service.controller';
import { SoilSensorServiceService } from './soil_sensor_service.service';

@Module({
  imports: [],
  controllers: [SoilSensorServiceController],
  providers: [SoilSensorServiceService],
})
export class SoilSensorServiceModule {}
