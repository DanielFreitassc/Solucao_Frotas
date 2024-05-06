import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanDto } from './loan.dto';

@Controller('loan')
export class LoanController {

    constructor(private readonly loanService: LoanService){}

    @HttpCode(HttpStatus.OK)
    @Get()
    listAll(){
        return this.loanService.listAllLoan()
    }

    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe)
    @Post()
    create(@Body() keys:LoanDto){
        return this.loanService.createLoan(keys)
    }

    @HttpCode(HttpStatus.OK)
    @Get('/:id')
    getById(@Param('id') id: string){
        return this.loanService.getByIdLoan(+id)
    }

    @HttpCode(HttpStatus.OK)
    @Delete('/:id')
    delete(@Param('id') id: string){
        return this.loanService.deleteLoan(+id)
    }
}
