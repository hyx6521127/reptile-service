import { Document } from 'mongoose';

export interface House extends Document {
    name: string;
    area: number;
    room: string;
    price: number;
    unitPrice: number;
    cycle: number;
    year: number;
    url: string;
}
