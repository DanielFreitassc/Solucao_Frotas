import { Module } from '@nestjs/common';
import { ConductorController } from './conductor.controller';
import { ConductorServices } from './conductor';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ConductorController],
  providers: [ConductorServices, PrismaService]
})
export class ConductorModule {}
