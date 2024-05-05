import { IsString } from "class-validator";

export class ConductorDto {

    @IsString()
    name: string;

    @IsString()
    cpf: string;

    @IsString()
    phone: string;

    @IsString()
    categoryDrive: string;
}