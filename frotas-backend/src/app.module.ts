import { Module } from '@nestjs/common';
import { ConductorModule } from './conductor/conductor.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [ConductorModule, CarModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
