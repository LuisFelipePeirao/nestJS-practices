import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove chaves que não estão no DTO
      forbidNonWhitelisted: true, // apresenta erro quando a chave não existir no DTO
      transform: false, // tenta transformar os tipos de dados de param e dtos
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
