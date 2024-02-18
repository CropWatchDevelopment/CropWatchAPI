import { Module } from '@nestjs/common';
import { CwSsTmepnpkService } from './cw_ss_tmepnpk.service';
import { CwSsTmepnpkController } from './cw_ss_tmepnpk.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_SERVICE', transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'user-messages',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [CwSsTmepnpkController],
  providers: [CwSsTmepnpkService],
  exports: [CwSsTmepnpkModule]
})
export class CwSsTmepnpkModule { }
