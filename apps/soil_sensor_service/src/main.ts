import { NestFactory } from '@nestjs/core';
import { SoilSensorServiceModule } from './soil_sensor_service.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(SoilSensorServiceModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
      queue: 'user-messages',
      queueOptions: {
        durable: false
      },
    },
  });
  await app.listen();
}
bootstrap();
