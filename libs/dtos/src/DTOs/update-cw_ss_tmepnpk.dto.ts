import { CreateCwSsTmepnpkDto } from '@app/dtos/DTOs/create-cw_ss_tmepnpk.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCwSsTmepnpkDto extends PartialType(CreateCwSsTmepnpkDto) {
  id: number;
}
