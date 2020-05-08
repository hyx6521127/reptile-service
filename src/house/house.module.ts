import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseSchema } from '../schemas/house.schema';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';

@Module({
    imports: [MongooseModule.forFeature([{name: 'House', schema: HouseSchema}])],
    providers: [HouseService],
    controllers: [HouseController],
})
export class HouseModule {}
