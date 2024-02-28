import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, AuthModule, MongooseModule.forRoot('mongodb+srv://wasyted:1186matias@dev.hforsbw.mongodb.net/?retryWrites=true&w=majority&appName=dev'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
