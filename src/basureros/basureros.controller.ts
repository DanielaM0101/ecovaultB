// basureros.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasurerosService } from './basureros.service';
import { CreateBasureroDto } from './dto/create-basurero.dto';
import { UpdateBasureroDto } from './dto/update-basurero.dto';

@Controller('basureros')
export class BasurerosController {
  constructor(private readonly basurerosService: BasurerosService) {}

  @Post()
  create(@Body() createBasureroDto: CreateBasureroDto) {
    return this.basurerosService.create(createBasureroDto);
  }

  @Get()
  findAll() {
    return this.basurerosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basurerosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasureroDto: UpdateBasureroDto) {
    return this.basurerosService.update(+id, updateBasureroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basurerosService.remove(+id);
  }
}
