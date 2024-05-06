import { IsString } from "class-validator";

export class LoanDto {
    @IsString()
    carId: string;

    @IsString()
    conductorId: string; 
}