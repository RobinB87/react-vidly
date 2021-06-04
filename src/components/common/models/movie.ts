import { RawParams } from "./rawParams";

export interface Movie extends RawParams {
    title: string;
    genre: string;
    numberInStock: number;
    rate: number;
}