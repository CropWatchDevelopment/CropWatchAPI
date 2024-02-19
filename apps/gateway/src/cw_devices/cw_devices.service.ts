import { Injectable } from '@nestjs/common';
import { CreateCwDeviceDto } from './dto/create-cw_device.dto';
import { UpdateCwDeviceDto } from './dto/update-cw_device.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CwDevicesService {

  constructor(private prisma: PrismaService) { }

  create(createCwDeviceDto: CreateCwDeviceDto) {
    return 'This action adds a new cwDevice';
  }

  findAll() {
    return this.prisma.cw_devices.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} cwDevice`;
  }

  update(id: number, updateCwDeviceDto: UpdateCwDeviceDto) {
    return `This action updates a #${id} cwDevice`;
  }

  remove(id: number) {
    return `This action removes a #${id} cwDevice`;
  }
}
