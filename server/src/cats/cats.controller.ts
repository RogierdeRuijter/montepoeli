import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateCatDto} from '../dtos/create-cat.dto';
import {CatsService} from './cats.service';
import {Cat} from '../interfaces/cat.interface';
import {AuthGuard} from '@nestjs/passport';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  @UseGuards(AuthGuard())
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard())
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

}
