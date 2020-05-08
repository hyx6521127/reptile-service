import { Model } from 'mongoose';
import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  OnApplicationBootstrap,
} from '@nestjs/common';
import {
  IRecommend,
  IResponse,
  Recommend,
} from '../interfaces/recommend.interface';
import * as https from 'https';
import { InjectModel } from '@nestjs/mongoose';
import url from './const/recommend.url';
import * as moment from 'moment';

@Injectable()
export class ReptileRecommendService
  implements OnApplicationBootstrap, OnModuleDestroy {
  private timer: NodeJS.Timeout;

  constructor(
    @InjectModel('Recommend') private recommendModule: Model<Recommend>,
  ) {}

  async onApplicationBootstrap() {
    const time = 1000 * 60 * 60 * 24;
    const dayStart = moment().startOf('day').valueOf();
    const dayEnd = moment().endOf('day').valueOf();
    const isTodayData = await this.recommendModule.find({time: {$gt: dayStart, $lte: dayEnd}});
    if (!isTodayData.length) {
      this.insertRecommend();
    }
    this.timer = setInterval(() => this.insertRecommend(), time);
  }

  onModuleDestroy() {
    clearInterval(this.timer);
  }

  reptile(Url: string, key: string): Promise<IRecommend | boolean> {
    return new Promise((resolve, reject) => {
      https.get(Url, res => {
        let resultStr = '';
        let result: IResponse;
        res.on('data', data => {
          resultStr += data;
        });

        res.on('end', () => {
          result = JSON.parse(resultStr).data;
          if (result.info) {
            const info = result.info;
            const recommendItem = {
              key,
              time: new Date().getTime(),
              name: info.name,
              unitPrice: info.unitPrice,
              dayThirtySee: info.day30See,
              ninetySaleCount: info['90saleCount'],
              sellNum: info.sellNum,
              url: info.soldUrl,
            };
            resolve(recommendItem);
          } else {
            resolve(false);
          }
        });
      });
    });
  }

  async insertRecommend() {
    try {
      const YunLiFang = await this.reptile(url.YunLiFang, 'YunLiFang');
      const HeNengZhenBao = await this.reptile(url.HeNengZhenBao, 'HeNengZhenBao');
      if (YunLiFang && HeNengZhenBao) {
        this.recommendModule.insertMany([YunLiFang, HeNengZhenBao]);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
