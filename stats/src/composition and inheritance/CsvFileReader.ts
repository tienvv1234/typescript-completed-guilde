import fs from 'fs';
import { IReader } from './interfaceReader';
import { MatchResult } from './MatchResult';

// type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader implements IReader {    
    data: string[][] = [];
    constructor(public fileName: string) {
        this.fileName = fileName;
    }

    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        }).split('\n').map((row: string): string[] => {
            return row.split(',')
        });
        // console.log(this.data);
    }
}