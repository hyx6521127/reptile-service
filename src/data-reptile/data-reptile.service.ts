import { Model } from 'mongoose';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { House } from '../interfaces/house.interface';
import * as cheerio from 'cheerio';
import * as https from 'https';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DataReptileService implements OnModuleInit, OnModuleDestroy {
  private timer: NodeJS.Timer;

  constructor(@InjectModel('House') private houseModule: Model<House>) {}

  onModuleInit() {
    this.cycleInsert();
  }

  onModuleDestroy() {
    clearTimeout(this.timer);
  }

  cycleInsert() {
    this.houseModule.deleteMany({}, () => {
      this.insertSimpleManyHouse();
      const time = 1000 * 60 * 60 * 24;
      this.timer = setTimeout(() => {
        this.cycleInsert();
      }, time);
    });
  }

  reptile(url: string, address?: string, page?: string): Promise<House[]> {
    const finalUrl = `https://cd.ke.com/chengjiao/${page || ''}${
      page ? '/' : ''
    }`;

    const roomReg = /[0-9]室[0-9]厅/;
    const areaReg = /(([0-9]+|0)\.([0-9]{1,2})|[0-9]+)平米/;
    const yearReg = /(\d+)年/;

    return new Promise((resolve, reject) => {
      https.get(finalUrl, res => {
        res.setEncoding('utf-8');

        let html = '';

        res.on('data', data => {
          html += data;
        });

        res.on('end', () => {
          const $ = cheerio.load(html);
          const list = $('.listContent li');
          const result = [];
          list.each(function() {
            const obj = {
              address,
              name: '',
              area: 0,
              room: '',
              price: 0,
              unitPrice: 0,
              cycle: 0,
              year: 0,
              url: '',
            };
            const title = $(this)
              .find('.title a')
              .text()
              .replace(/([ \n]*)/g, '');
            const area = title.match(areaReg);
            const room = title.match(roomReg);
            const name = title.replace(areaReg, '').replace(roomReg, '');
            const year = $(this)
              .find('.flood .positionInfo')
              .text()
              .match(yearReg);
            obj.name = name;
            obj.area = area ? Number(area[0].replace('平米', '')) : 0;
            obj.room = room ? room[0] : '';
            obj.year = year ? Number(year[0].replace('年', '')) : 0;
            obj.price = Number(
              $(this)
                .find('.totalPrice .number')
                .text(),
            );
            obj.unitPrice = Number(
              $(this)
                .find('.unitPrice .number')
                .text(),
            );
            obj.cycle = Number(
              $(this)
                .find('.dealCycleTxt span')
                .last()
                .text()
                .replace(/\D/g, ''),
            );
            obj.url = $(this)
              .find('.title a')
              .attr('href');
            result.push(obj);
          });
          resolve(result);
        });
      });
    });
  }

  async insertWuHouManyHouse() {
    const url = 'https://cd.ke.com/chengjiao/wuhou/';
    const address = 'wuhou';
    const pg = [this.reptile(url, address)];
    for (let i = 2; i < 100; i++) {
      pg.push(this.reptile(url, address, `pg${i}`));
    }
    const data = await Promise.all(pg);
    const result = data.reduce((item, current) => [...item, ...current], []);
    this.houseModule.insertMany(result);
  }
  async insertGaoXinManyHouse() {
    const url = 'https://cd.ke.com/chengjiao/gaoxin7/';
    const address = 'gaoxin';
    const pg = [this.reptile(url, address)];
    for (let i = 2; i < 100; i++) {
      pg.push(this.reptile(url, address, `pg${i}`));
    }
    const data = await Promise.all(pg);
    const result = data.reduce((item, current) => [...item, ...current], []);
    this.houseModule.insertMany(result);
  }
  async insertJinNiuManyHouse() {
    const url = 'https://cd.ke.com/chengjiao/jinniu/';
    const address = 'jinniu';
    const pg = [this.reptile(url, address)];
    for (let i = 2; i < 100; i++) {
      pg.push(this.reptile(url, address, `pg${i}`));
    }
    const data = await Promise.all(pg);
    const result = data.reduce((item, current) => [...item, ...current], []);
    this.houseModule.insertMany(result);
  }
  async insertQingYangManyHouse() {
    const url = 'https://cd.ke.com/chengjiao/qingyang/';
    const address = 'qingyang';
    const pg = [this.reptile(url, address)];
    for (let i = 2; i < 100; i++) {
      pg.push(this.reptile(url, address, `pg${i}`));
    }
    const data = await Promise.all(pg);
    const result = data.reduce((item, current) => [...item, ...current], []);
    this.houseModule.insertMany(result);
  }
  async insertChengHuaManyHouse() {
    const url = 'https://cd.ke.com/chengjiao/chenghua/';
    const address = 'chenghua';
    const pg = [this.reptile(url, address)];
    for (let i = 2; i < 100; i++) {
      pg.push(this.reptile(url, address, `pg${i}`));
    }
    const data = await Promise.all(pg);
    const result = data.reduce((item, current) => [...item, ...current], []);
    this.houseModule.insertMany(result);
  }
  async insertTianFuXinQuManyHouse() {
    const url = 'https://cd.ke.com/chengjiao/tianfuxinqu/';
    const address = 'tianfuxinqu';
    const pg = [this.reptile(url, address)];
    for (let i = 2; i < 100; i++) {
      pg.push(this.reptile(url, address, `pg${i}`));
    }
    const data = await Promise.all(pg);
    const result = data.reduce((item, current) => [...item, ...current], []);
    this.houseModule.insertMany(result);
  }
  async insertJinJiangManyHouse() {
    const url = 'https://cd.ke.com/chengjiao/jinjiang/';
    const address = 'jinjiang';
    const pg = [this.reptile(url, address)];
    for (let i = 2; i < 100; i++) {
      pg.push(this.reptile(url, address, `pg${i}`));
    }
    const data = await Promise.all(pg);
    const result = data.reduce((item, current) => [...item, ...current], []);
    this.houseModule.insertMany(result);
  }
  async insertShuangLiuManyHouse() {
    const url = 'https://cd.ke.com/chengjiao/shuangliu/';
    const address = 'shuangliu';
    const pg = [this.reptile(url, address)];
    for (let i = 2; i < 100; i++) {
      pg.push(this.reptile(url, address, `pg${i}`));
    }
    const data = await Promise.all(pg);
    const result = data.reduce((item, current) => [...item, ...current], []);
    this.houseModule.insertMany(result);
  }
  async insertWenJiangManyHouse() {
    const url = 'https://cd.ke.com/chengjiao/wenjiang/';
    const address = 'wenjiang';
    const pg = [this.reptile(url, address)];
    for (let i = 2; i < 100; i++) {
      pg.push(this.reptile(url, address, `pg${i}`));
    }
    const data = await Promise.all(pg);
    const result = data.reduce((item, current) => [...item, ...current], []);
    this.houseModule.insertMany(result);
  }
  async insertGaoXinXiManyHouse() {
    const url = 'https://cd.ke.com/fangjia/gaoxinxi1/';
    const address = 'gaoxinxi';
    const pg = [this.reptile(url, address)];
    for (let i = 2; i < 100; i++) {
      pg.push(this.reptile(url, address, `pg${i}`));
    }
    const data = await Promise.all(pg);
    const result = data.reduce((item, current) => [...item, ...current], []);
    this.houseModule.insertMany(result);
  }
  async insertSimpleManyHouse() {
    console.log('insertSimple');
    const url = 'https://cd.ke.com/fangjia/';
    const address = 'simple';
    const pg = [this.reptile(url, address)];
    for (let i = 2; i < 100; i++) {
      pg.push(this.reptile(url, address, `pg${i}`));
    }
    const data = await Promise.all(pg);
    const result = data.reduce((item, current) => [...item, ...current], []);
    this.houseModule.insertMany(result);
  }
}
