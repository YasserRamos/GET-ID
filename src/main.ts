import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//SWAGGER
  const config = new DocumentBuilder()
    .setTitle('Timeboxing')
    .setDescription('Plataforma de gestión de tiempo de actividades')
    .setVersion('1.0')
    .addTag('timeboxing')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
//SWAGGER

  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
