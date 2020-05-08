import { Controller, Get, Res } from '@nestjs/common';
import { DataReptileService } from './data-reptile.service';

@Controller('data-reptile')
export class DataReptileController {
    constructor(private dataReptileService: DataReptileService) {}

    @Get('wuhou')
    async reptileWuHouData() {
        await this.dataReptileService.insertWuHouManyHouse();
        return 'success';
    }
    @Get('jinniu')
    async reptileJinNiuData() {
        await this.dataReptileService.insertJinNiuManyHouse();
        return 'success';
    }
    @Get('jinjiang')
    async reptileJinJiangData() {
        await this.dataReptileService.insertJinJiangManyHouse();
        return 'success';
    }
    @Get('qingyang')
    async reptileQingYangData() {
        await this.dataReptileService.insertQingYangManyHouse();
        return 'success';
    }
    @Get('gaoxin')
    async reptileGaoXinData() {
        await this.dataReptileService.insertGaoXinManyHouse();
        return 'success';
    }
    @Get('tianfuxinqu')
    async reptileTianFuXinQuData() {
        await this.dataReptileService.insertTianFuXinQuManyHouse();
        return 'success';
    }
    @Get('chenghua')
    async reptileChengHuaData() {
        await this.dataReptileService.insertChengHuaManyHouse();
        return 'success';
    }
    @Get('shuangliu')
    async reptileShuangLiuData() {
        await this.dataReptileService.insertShuangLiuManyHouse();
        return 'success';
    }
    @Get('wenjiang')
    async reptileWenJiangData() {
        await this.dataReptileService.insertWenJiangManyHouse();
        return 'success';
    }
    @Get('gaoxinxi')
    async reptileGaoXinXiData() {
        await this.dataReptileService.insertGaoXinXiManyHouse();
        return 'success';
    }
    @Get()
    async retileAllData() {
        await this.dataReptileService.insertWuHouManyHouse();
        await this.dataReptileService.insertJinNiuManyHouse();
        await this.dataReptileService.insertJinJiangManyHouse();
        await this.dataReptileService.insertQingYangManyHouse();
        await this.dataReptileService.insertGaoXinManyHouse();
        await this.dataReptileService.insertTianFuXinQuManyHouse();
        await this.dataReptileService.insertChengHuaManyHouse();
        await this.dataReptileService.insertShuangLiuManyHouse();
        await this.dataReptileService.insertWenJiangManyHouse();
        await this.dataReptileService.insertGaoXinXiManyHouse();
        return 'success';
    }
    @Get('simple')
    async retileSimpleData() {
        await this.dataReptileService.insertSimpleManyHouse();
        return 'success';
    }
}
