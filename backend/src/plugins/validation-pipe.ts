import { INestApplication, ValidationPipe } from '@nestjs/common';

export const setupValidationPipe = (app: INestApplication) => {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
};
