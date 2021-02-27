import { MatchResult } from './MatchResult';
import { BaseReader } from "./BaseReader";
import { dateStringToDate } from './utils';
import { IReader } from './interfaceReader';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvReader extends BaseReader<MatchData> implements IReader {
    read(): void {
        throw new Error('Method not implemented.');
    }
    data: string[][] = [];
    load(): void {
        this.read();
    }

    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult, // type assertions
            row[6]
        ];
    }
    
}