import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataReptileModule } from './data-reptile/data-reptile.module';
import { HouseModule } from './house/house.module';
import { ReptileRecommendModule } from './reptile-recommend/reptile-recommend.module';
import { RecommendModule } from './recommend/recommend.module';

@Module({
  imports: [DataReptileModule, HouseModule, ReptileRecommendModule, RecommendModule, MongooseModule.forRoot('mongodb://localhost:27017/reptile')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
