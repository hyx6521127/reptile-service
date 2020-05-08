import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AppInterceptor } from './app.interceptor';
import { join } from 'path';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalInterceptors(new AppInterceptor());
  app.use(compression());
  app.setGlobalPrefix('/api');
  app.useStaticAssets(join(__dirname, './../build'));
  app.setBaseViewsDir(join(__dirname, './../build'));
  app.setViewEngine('html');

  await app.listen(80);
}
bootstrap();
