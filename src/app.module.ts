import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BasurerosModule } from './basureros/basureros.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que ConfigModule esté disponible en toda la aplicación sin necesidad de importarlo en cada módulo
    }),
    PrismaModule,
    BasurerosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
