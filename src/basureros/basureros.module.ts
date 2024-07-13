import { Module } from '@nestjs/common';
import { BasurerosService } from './basureros.service';
import { BasurerosController } from './basureros.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BasurerosController],
  providers: [BasurerosService],
  imports: [PrismaModule]
})
export class BasurerosModule {}