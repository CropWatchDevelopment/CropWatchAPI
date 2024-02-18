import { Injectable } from '@nestjs/common';

@Injectable()
export class SoilSensorServiceService {
  getHello(): string {
    return 'WELCOME BACK TO THE MICROSERVICE WORLD!';
  }
}
