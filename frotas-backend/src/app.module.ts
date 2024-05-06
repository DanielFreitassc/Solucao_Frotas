import { Module } from '@nestjs/common';
import { ConductorModule } from './conductor/conductor.module';
import { CarModule } from './car/car.module';
import { LoanModule } from './loan/loan.module';

@Module({
  imports: [ConductorModule, CarModule, LoanModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
