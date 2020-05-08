import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecommendSchema } from '../schemas/recommend.schema';
import { RecommendService } from './recommend.service';
import { RecommendController } from './recommend.controller';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Recommend', schema: RecommendSchema}])],
    providers: [RecommendService],
    controllers: [RecommendController],
})
export class RecommendModule {}
