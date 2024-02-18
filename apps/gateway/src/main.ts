import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('CropWatch API')
    .setDescription('This acts as a reference for the transmission schema and standards set forth by CropWatch LLC, This API is subject to change at anytime with or without notice.')
    .setVersion('1.0')
    .setLicense('License', 'https://github.com')
    .setTermsOfService('This API, The data from it, and all related services from CropWatch LLC is provided as an added service. There will be NO promise of data accuracy, timelyness, availability, consistancy of any form now or in the future.')
    .addTag('GATEWAY')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
