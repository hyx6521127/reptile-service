import { Document } from 'mongoose';

export interface Recommend extends Document {
    unitPrice: number;
    ninetySaleCount: string;
    sellNum: number;
    dayThirtySee: string;
    name: string;
    time: number;
    url: string;
    key: string;
}

export interface IRecommend {
    unitPrice: number;
    ninetySaleCount: string;
    sellNum: number;
    dayThirtySee: string;
    name: string;
    time: number;
    url: string;
    key: string;
}

export interface IInfo {
    unitPrice: number;
    ['90saleCount']: string;
    sellNum: number;
    ['day30See']: string;
    name: string;
    time: number;
    soldUrl: string;
}

export interface IResponse {
    agentCode: string;
    agentUcid: string;
    name: string;
    appid: string;
    photoPath: string;
    agentUrl: string;
    desc: string;
    ljwebSource: string;
    ljwebStatId: string;
    fourPhoneOneTop: string;
    fourPhoneOneHover: string;
    digVTop: string;
    digVHover: string;
    vipLevel: number;
    agentMark: string;
    tags: string[];
    info: IInfo;
    type: string;
}
