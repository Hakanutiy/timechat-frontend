import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupPlugins } from '@/plugins';

const PORT = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupPlugins(app);
  app.enableCors();
  await app.listen(PORT);
}

bootstrap();
