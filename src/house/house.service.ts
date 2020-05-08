import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IListParams } from './interface/params.interface'
import { House } from '../interfaces/house.interface';

@Injectable()
export class HouseService {
  constructor(@InjectModel('House') private houseModule: Model<House>) {}

  getHouseList(params: IListParams) {
    return new Promise((resolve, reject) => {
      this.houseModule.find(params, (err, res) => {
        resolve(res);
      });
    });
  }

  getYearStatistics() {
    return new Promise((resolve, reject) => {
      this.houseModule.aggregate(
        [
          { $group: { _id: '$year', value: { $sum: 1 } } },
          { $sort: { _id: -1 } },
          { $project: { name: '$_id', value: 1, _id: 0 } },
        ],
        (err, res) => {
          resolve(res);
        },
      );
    });
  }

  getCycle() {
    return new Promise((resolve, reject) => {
      this.houseModule.find((err, res) => {
        let month = 0;
        let threeMonth = 0;
        let halfYear = 0;
        let year = 0;
        let overYear = 0;
        res.forEach((item: House) => {
          if (item.cycle < 30) {
            month += 1;
          } else if (item.cycle >= 30 && item.cycle < 90) {
            threeMonth += 1;
          } else if (item.cycle >= 90 && item.cycle < 180) {
            halfYear += 1;
          } else if (item.cycle >= 180 && item.cycle < 360) {
            year += 1;
          } else if (item.cycle >= 360) {
            overYear += 1;
          }
        });
        resolve([
          {
            name: '一个月内',
            value: month,
          },
          {
            name: '一至三个月',
            value: threeMonth,
          },
          {
            name: '三至六个月',
            value: halfYear,
          },
          {
            name: '半年至一年',
            value: year,
          },
          {
            name: '一年以上',
            value: overYear,
          },
        ]);
      });
    });
  }
}
