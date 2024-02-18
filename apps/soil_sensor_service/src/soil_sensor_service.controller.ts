import { Controller, Get } from '@nestjs/common';
import { SoilSensorServiceService } from './soil_sensor_service.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateCwSsTmepnpkDto } from '@app/dtos/DTOs/create-cw_ss_tmepnpk.dto';

@Controller()
export class SoilSensorServiceController {
  constructor(private readonly soilSensorServiceService: SoilSensorServiceService) {}

  @EventPattern('createCwSsTmepnpk')
  getHello(): string {
    console.log('i just got a request! Yippi!')
    return this.soilSensorServiceService.getHello();
  }

  @EventPattern('CREATE')
  getCreate(data: CreateCwSsTmepnpkDto): boolean {
    console.log('its creatin time!', data)
    if (!data.isSimulation) {
      this.soilSensorServiceService.getHello();
      return true;
    } else {
      return false;
    }
  }
}
