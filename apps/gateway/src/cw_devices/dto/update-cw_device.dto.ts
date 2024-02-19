import { PartialType } from '@nestjs/mapped-types';
import { CreateCwDeviceDto } from './create-cw_device.dto';

export class UpdateCwDeviceDto extends PartialType(CreateCwDeviceDto) {}
