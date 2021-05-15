import { RawParams } from "./rawParams";

export interface Login extends RawParams {
    userName: string;
    password: string;
    name: string;
}