import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 8080;
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => console.log('Started with PORT ' + PORT));
}
bootstrap();
