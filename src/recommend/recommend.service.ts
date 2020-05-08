import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recommend } from '../interfaces/recommend.interface';

@Injectable()
export class RecommendService {
  constructor(@InjectModel('Recommend') private recommendModule: Model<Recommend>) {}

  async getRecommend() {
    try {
      const YunLiFang = await this.recommendModule.find({key: 'YunLiFang'});
      const HeNengZhenBao = await this.recommendModule.find({key: 'HeNengZhenBao'});
      return {YunLiFang, HeNengZhenBao};
    } catch (err) {
      return err;
    }
  }
}
