import { Test, TestingModule } from '@nestjs/testing';
import { SoilSensorServiceController } from './soil_sensor_service.controller';
import { SoilSensorServiceService } from './soil_sensor_service.service';

describe('SoilSensorServiceController', () => {
  let soilSensorServiceController: SoilSensorServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SoilSensorServiceController],
      providers: [SoilSensorServiceService],
    }).compile();

    soilSensorServiceController = app.get<SoilSensorServiceController>(SoilSensorServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(soilSensorServiceController.getHello()).toBe('Hello World!');
    });
  });
});
