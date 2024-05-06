import { Module } from '@nestjs/common';
import { LoanController } from './loan.controller';
import { LoanService } from './loan.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LoanController],
  providers: [LoanService, PrismaService]
})
export class LoanModule {}
