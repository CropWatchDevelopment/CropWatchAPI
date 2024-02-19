import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CwDevicesService } from './cw_devices.service';
import { CreateCwDeviceDto } from './dto/create-cw_device.dto';
import { UpdateCwDeviceDto } from './dto/update-cw_device.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CwDevice } from './entities/cw_device.entity';

@ApiTags('Devices')
@Controller('cw-devices')
export class CwDevicesController {
  constructor(private readonly cwDevicesService: CwDevicesService) {}

  @Post()
  create(@Body() createCwDeviceDto: CreateCwDeviceDto) {
    return this.cwDevicesService.create(createCwDeviceDto);
  }

  @Get()
  @ApiOkResponse({ type: CwDevice })
  findAll() {
    return this.cwDevicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cwDevicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCwDeviceDto: UpdateCwDeviceDto) {
    return this.cwDevicesService.update(+id, updateCwDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cwDevicesService.remove(+id);
  }
}
