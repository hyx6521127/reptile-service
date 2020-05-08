import { Controller, Get, Query } from '@nestjs/common';
import { HouseService } from './house.service';

@Controller('house')
export class HouseController {
    constructor(private houseService: HouseService) {}

    @Get('list')
    async getHouseList(@Query() params) {
        console.log(params);
        return await this.houseService.getHouseList(params);
    }

    @Get('yearStatistics')
    async getYearStatistics(@Query() params) {
        console.log(params);
        return await this.houseService.getYearStatistics();
    }

    @Get('cycle')
    async getCycle() {
        return await this.houseService.getCycle();
    }
}
