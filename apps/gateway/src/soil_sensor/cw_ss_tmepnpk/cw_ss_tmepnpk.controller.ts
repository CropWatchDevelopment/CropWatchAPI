import { Body, Controller, ControllerOptions, Inject, Post, Version } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateCwSsTmepnpkDto } from '@app/dtos/DTOs/create-cw_ss_tmepnpk.dto';
import { Throttle } from '@nestjs/throttler';


@Controller('/soil-sensor/CW-SS-TMEPNPK')
export class CwSsTmepnpkController {
  constructor(@Inject('HELLO_SERVICE') private readonly client: ClientProxy) {}

  @MessagePattern('createCwSsTmepnpk')
  @Version('1')
  @Post('Create')
  create(@Body() createCwSsTmepnpkDto: CreateCwSsTmepnpkDto): any {
    console.log('soil sensor service called')
    return this.client.emit<any>('CREATE', createCwSsTmepnpkDto);
  }

  // @MessagePattern('findAllCwSsTmepnpk')
  // findAll() {
  //   return this.cwSsTmepnpkService.findAll();
  // }

  // @MessagePattern('findOneCwSsTmepnpk')
  // findOne(@Payload() id: number) {
  //   return this.cwSsTmepnpkService.findOne(id);
  // }

  // @MessagePattern('updateCwSsTmepnpk')
  // update(@Payload() updateCwSsTmepnpkDto: UpdateCwSsTmepnpkDto) {
  //   return this.cwSsTmepnpkService.update(updateCwSsTmepnpkDto.id, updateCwSsTmepnpkDto);
  // }

  // @MessagePattern('removeCwSsTmepnpk')
  // remove(@Payload() id: number) {
  //   return this.cwSsTmepnpkService.remove(id);
  // }
}
