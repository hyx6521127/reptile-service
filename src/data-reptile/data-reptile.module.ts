import { Module } from '@nestjs/common';
import { DataReptileController } from './data-reptile.controller';
import { DataReptileService } from './data-reptile.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseSchema } from '../schemas/house.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: 'House', schema: HouseSchema}])],
    providers: [DataReptileService],
    controllers: [DataReptileController],
})
export class DataReptileModule {}
