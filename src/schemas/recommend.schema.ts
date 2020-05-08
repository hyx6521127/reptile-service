import * as mongoose from 'mongoose';

export const RecommendSchema = new mongoose.Schema({
    unitPrice: Number,
    ninetySaleCount: String,
    sellNum: Number,
    dayThirtySee: String,
    name: String,
    time: Number,
    url: String,
    key: String,
});
