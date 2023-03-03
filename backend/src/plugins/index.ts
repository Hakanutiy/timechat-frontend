import { INestApplication } from '@nestjs/common';
import { setupValidationPipe } from './validation-pipe';
import { setupSwagger } from './swagger';
import { setupClassValidator } from './class-validator';

export const setupPlugins = (app: INestApplication) => {
  setupValidationPipe(app);
  setupClassValidator(app);
  setupSwagger(app);
};
