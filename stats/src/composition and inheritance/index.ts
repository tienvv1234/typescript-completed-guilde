// import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
// import { CsvReader } from './CsvReader';
import { CsvMatchReader } from './CsvMatchReader';
// import fs from 'fs';

// hard code
// const matches = fs.readFileSync('./stats/football.csv', {
//     encoding: 'utf-8'
// }).split('\n').map((row: string): string[] => {
//     return row.split(',')
// });

// console.log(matches);


// enum MatchResult {
//     HomeWin = 'H',
//     AwayWin = 'A',
//     Draw = 'D'
// }

// reuseable code
// const reader = new MatchReader('./stats/football.csv');
// reader.read();

// Create an object that satisfies the 'dataReader' interface
const csvFileReader = new CsvFileReader('./stats/football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'dataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

// const csvReader = new CsvReader('./stats/football.csv');
// csvReader.read();

const csvMatchReader = new CsvMatchReader(csvFileReader)
csvMatchReader.load();
let manUnitedWins = 0;

// console.log('reader.data', reader.data)

for (let match of csvMatchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);
