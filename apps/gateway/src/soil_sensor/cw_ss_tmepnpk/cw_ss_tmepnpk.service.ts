import { Injectable } from '@nestjs/common';
import { CreateCwSsTmepnpkDto } from '../../../../../libs/dtos/src/DTOs/create-cw_ss_tmepnpk.dto';
import { UpdateCwSsTmepnpkDto } from './dto/update-cw_ss_tmepnpk.dto';

@Injectable()
export class CwSsTmepnpkService {
  create(createCwSsTmepnpkDto: CreateCwSsTmepnpkDto) {
    return 'This action adds a new cwSsTmepnpk';
  }

  findAll() {
    return `This action returns all cwSsTmepnpk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cwSsTmepnpk`;
  }

  update(id: number, updateCwSsTmepnpkDto: UpdateCwSsTmepnpkDto) {
    return `This action updates a #${id} cwSsTmepnpk`;
  }

  remove(id: number) {
    return `This action removes a #${id} cwSsTmepnpk`;
  }
}
