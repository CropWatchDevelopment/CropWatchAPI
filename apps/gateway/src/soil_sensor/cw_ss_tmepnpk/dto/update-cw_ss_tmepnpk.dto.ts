import { PartialType } from '@nestjs/mapped-types';
import { CreateCwSsTmepnpkDto } from '../../../../../../libs/dtos/src/DTOs/create-cw_ss_tmepnpk.dto';

export class UpdateCwSsTmepnpkDto extends PartialType(CreateCwSsTmepnpkDto) {
  id: number;
}
