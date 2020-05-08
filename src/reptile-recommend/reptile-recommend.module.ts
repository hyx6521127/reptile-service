import { Module } from '@nestjs/common';
import { ReptileRecommendController } from './reptile-recommend.controller';
import { ReptileRecommendService } from './reptile-recommend.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecommendSchema } from '../schemas/recommend.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Recommend', schema: RecommendSchema}])],
    providers: [ReptileRecommendService],
    controllers: [ReptileRecommendController],
})
export class ReptileRecommendModule {}
