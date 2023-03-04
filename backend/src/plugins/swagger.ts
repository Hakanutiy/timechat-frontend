import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiBearerAuthName } from '@/constants';

export const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('TimeChat')
    .setDescription('The TimeChat API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      apiBearerAuthName,
    )
    .build();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const document = SwaggerModule.createDocument(app, config);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  SwaggerModule.setup('api', app, document);
};
