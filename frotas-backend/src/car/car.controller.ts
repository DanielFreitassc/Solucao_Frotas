import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService){}

    @UsePipes(new ValidationPipe)
    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() car:CarDto){
        return this.carService.createCar(car)
    }

    @Get()
    listAll(){
        return this.carService.listAllCar()
    }

    @Get('/:id')
    GetById(@Param('id') id:string){
        return this.carService.getByIdCar(+id)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete('/:id')
    delete(@Param('id') id: string){
        return this.carService.deleteCar(+id)
    }
}
