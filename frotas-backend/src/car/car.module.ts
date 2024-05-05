import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './carService';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CarController],
  providers: [CarService, PrismaService]
})
export class CarModule {}
