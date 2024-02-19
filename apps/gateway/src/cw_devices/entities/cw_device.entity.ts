import { ApiProperty } from "@nestjs/swagger";
import { cw_devices } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export class CwDevice implements cw_devices {
    @ApiProperty()
    dev_eui: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    type: bigint;
    @ApiProperty()
    upload_interval: Decimal;
    @ApiProperty()
    lat: Decimal;
    @ApiProperty()
    long: Decimal;
}
