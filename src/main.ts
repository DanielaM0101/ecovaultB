import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './filters/http-exception.filter'; // Asegúrate de que este archivo exista en la carpeta correcta

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: 'http://localhost:4200',
  });

  // Configuración del filtro global de excepciones
  app.useGlobalFilters(new HttpExceptionFilter());

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('EcoVault')
    .setDescription('The EcoVault API description')
    .setVersion('1.0')
    .addTag('ecovault')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Obtener el puerto del servicio de configuración
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
}

bootstrap();
