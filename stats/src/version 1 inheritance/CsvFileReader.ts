import fs from 'fs';

export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public fileName: string) {
        this.fileName = fileName;
    }

    read() {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        }).split('\n').map((row: string): string[] => {
            return row.split(',')
        })
        .map(this.mapRow);
        // console.log(this.data);
    }

    abstract mapRow(row: string[]): T
}