import * as mongoose from 'mongoose';

export const HouseSchema = new mongoose.Schema({
    name: String,
    area: Number,
    room: String,
    price: Number,
    unitPrice: Number,
    cycle: Number,
    year: Number,
    url: String,
});
