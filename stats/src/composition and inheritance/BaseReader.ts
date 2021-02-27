import { IReader } from './interfaceReader';

export abstract class BaseReader<T> {
    constructor(public reader: IReader) {}

    abstract mapRow(row: string[]): T
}