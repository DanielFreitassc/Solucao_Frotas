import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ConductorServices } from './conductor';
import { ConductorDto } from './conductor.dto';

@Controller('conductor')
export class ConductorController {
    constructor(private readonly conductorService:ConductorServices ){}

    @UsePipes(new ValidationPipe)
    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() conductor: ConductorDto){
        return this.conductorService.createConductor(conductor)
    }

    @Get()
    listAll(){
        return this.conductorService.listAllConductor()
    }

    @Get('/:id')
    getById(@Param('id') id: string){
        return this.conductorService.getByIdConductor(Number(id))
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete('/:id')
    delete(@Param('id') id: string){
        return this.conductorService.deleteConductor(+id)
    }

}
