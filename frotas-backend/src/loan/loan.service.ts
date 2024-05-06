import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LoanDto } from './loan.dto';

@Injectable()
export class LoanService {
    constructor(private readonly prisma: PrismaService){}

    async listAllLoan(){
        return await this.prisma.loan.findMany({
            select:{
                id: true,
                car:true,
                conductor:true
            },
        })
    }

    async getByIdLoan(id:number){
        const getLoan = await this.prisma.loan.findFirst({
            select:{
                id: true,
                car: true,
                conductor:true,
            },
            where:{
                id:id
            }
        })


        if(!getLoan){
            throw new NotFoundException("Empréstimo não encontrado")
        }

        return getLoan
    }

    async createLoan(keys:LoanDto){
        return await this.prisma.loan.create({
            data:{
                carId: keys.carId,
                conductorId: keys.conductorId
            }
        })
    }

    async deleteLoan(id:number){
        await this.getByIdLoan(id)

        return await this.prisma.loan.delete({
            where:{
                id:id
            }
        })
    }
}
