import { Controller, Get, Query } from '@nestjs/common';
import { RecommendService } from './recommend.service';

@Controller('recommend')
export class RecommendController {
    constructor(private recommendService: RecommendService) {}

    @Get('static')
    getRecommendStatic() {
        return this.recommendService.getRecommend();
    }
}
