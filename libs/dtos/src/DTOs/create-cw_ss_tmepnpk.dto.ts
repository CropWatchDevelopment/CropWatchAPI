import { ApiProperty } from "@nestjs/swagger";

export class CreateCwSsTmepnpkDto {
    @ApiProperty({
        description: 'The DevEUI is a 64-bit globally-unique Extended Unique Identifier (EUI-64). (STRING/VARCHAR(16))',
        maxLength: 16,
        minLength: 16,
    })
    dev_eui: string;

    @ApiProperty({
        description: 'Temperature in Celcius, (DECIMAL/DECIMAL)',
        maximum: 80.0,
        minimum: -40.0
    })
    soil_temperatureC: number;

    @ApiProperty({
        description: 'Percentage of water in the soil, Integer Value (INT/INT2)',
        maximum: 100,
        minimum: 0
    })
    soil_moisture: number;

    @ApiProperty({
        description: 'Electric Conductivity of the soil measured in uS/CM use (INT/INT2)',
        maximum: 20000,
        minimum: 0
    })
    soil_EC: number;

    @ApiProperty({
        description: 'The Soil Acicidy in pH use (DECIMAL/DECIMAL)',
        maximum: 9,
        minimum: 3
    })
    soil_PH: number;

    @ApiProperty({
        description: 'The Soil Nitrogen measured in Milligrams per Kilogram (INT/INT2)',
        maximum: 2999,
        minimum: 1
    })
    soil_N: number;

    @ApiProperty({
        description: 'The Soil Phosphorus measured in Milligrams per Kilogram (INT/INT2)',
        maximum: 2999,
        minimum: 1
    })
    soil_P: number;

    @ApiProperty({
        description: 'The Soil Potassium measured in Milligrams per Kilogram (INT/INT2)',
        maximum: 2999,
        minimum: 1
    })
    soil_K: number;

    @ApiProperty({
        description: 'The Voltage measured at time of transmission (DECIMAL/DECIMAL)',
        maximum: 3.7,
        minimum: 2.5
    })
    batteryVoltage: number;

    @ApiProperty({
        description: 'The Internal Temp of the sending device (INT/INT2)',
        maximum: 80,
        minimum: -40
    })
    internalTemp: number;

    @ApiProperty({
        description: 'Number of attempts the device had before getting a value from the sensor (debug use only, (INT/INT2)',
        maximum: 3,
        minimum: 1
    })
    modbusAttempts: number;

    @ApiProperty({
        description: 'To detect if the uplink was a simulation or a real data message (BOOL/BIT)',
    })
    isSimulation: boolean;
}
