import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageModule } from './image/image.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    ImageModule,
    TypegooseModule.forRoot('mongodb://localhost:27017/imageapi', {
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
