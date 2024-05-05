import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CarDto } from './car.dto';

@Injectable()
export class CarService {
    constructor(private readonly prismaService: PrismaService){}

    async createCar(car: CarDto){
        return await this.prismaService.car.create({
            data: car
        })
    }

    async listAllCar(){
        return await this.prismaService.car.findMany()
    }

    async getByIdCar(id:number){
        
        const getCar = await this.prismaService.car.findFirst({
            where:{
                id:id
            }
        })

        if(!getCar){
            throw new NotFoundException("Carro não encontrado")
        }

        return await this.prismaService.car.findFirst({
            where:{
                id: id
            }
        })
    }

    async deleteCar(id:number){

        const getCar = await this.prismaService.car.findFirst({
            where:{
                id:id
            }
        })

        if(!getCar){
            throw new NotFoundException("Carro não encontrado")
        }

        return await this.prismaService.car.delete({
            where:{
                id: id
            }
        })
    }
}
