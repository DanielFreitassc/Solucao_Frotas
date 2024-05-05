import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ConductorDto } from './conductor.dto';

@Injectable()
export class ConductorServices {

    constructor(private readonly prisma: PrismaService){}

    async createConductor(conductor: ConductorDto){
        return await this.prisma.conductor.create({
            data: conductor
        })
    }

    async listAllConductor(){
        return await this.prisma.conductor.findMany()
    }

    async getByIdConductor(id:number){
        const getConductor = await this.prisma.car.findFirst({
            where:{
                id:id
            }
        })

        if(!getConductor){
            throw new NotFoundException("Carro não encontrado")
        }

        return this.prisma.conductor.findFirst({
            where:{
                id:id
            }
        })
    }

    async deleteConductor(id:number){
        const getConductor = await this.prisma.car.findFirst({
            where:{
                id:id
            }
        })

        if(!getConductor){
            throw new NotFoundException("Carro não encontrado")
        }

        return this.prisma.conductor.delete({
            where:{
                id:id
            }
        })
    }

}
