// basureros.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBasureroDto } from './dto/create-basurero.dto';
import { UpdateBasureroDto } from './dto/update-basurero.dto';

@Injectable()
export class BasurerosService {
  constructor(private prisma: PrismaService) {}

  async create(createBasureroDto: CreateBasureroDto) {
    const { name, location, incharge, capacity } = createBasureroDto;
    return this.prisma.basurero.create({
      data: {
        name,
        location,
        incharge,
        capacity,
      },
    });
  }

  async findAll() {
    return this.prisma.basurero.findMany();
  }

  async findOne(id: number) {
    return this.prisma.basurero.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateBasureroDto: UpdateBasureroDto) {
    const { name, location, incharge, capacity } = updateBasureroDto;
    return this.prisma.basurero.update({
      where: { id },
      data: {
        name,
        location,
        incharge,
        capacity,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.basurero.delete({
      where: { id },
    });
  }
}
