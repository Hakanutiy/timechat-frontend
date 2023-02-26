import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './models/auth/auth.module';
import { UserModule } from './models/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PAS}@cluster0.rvtyqse.mongodb.net/?retryWrites=true&w=majority`,
    ),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
