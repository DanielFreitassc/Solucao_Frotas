import { IsString } from "class-validator";

export class CarDto{
    @IsString()
    licensePlate: string;

    @IsString()
    model: string;

    @IsString()
    category: string;

    @IsString()
    year: string;

    @IsString()
    color: string;

    @IsString()
    mileage: string;

    @IsString()
    chassisNumber: string;
}