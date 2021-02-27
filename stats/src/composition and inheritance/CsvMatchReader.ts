import { MatchResult } from './MatchResult';
import { BaseReader } from "./BaseReader";
import { dateStringToDate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvMatchReader extends BaseReader<MatchData> {

    matches: MatchData[] = [];

    load() {
        this.reader.read();
        this.matches = this.reader.data.map(this.mapRow);
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