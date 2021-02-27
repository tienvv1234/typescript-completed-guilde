import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
// import fs from 'fs';

// hard code
// const matches = fs.readFileSync('./stats/football.csv', {
//     encoding: 'utf-8'
// }).split('\n').map((row: string): string[] => {
//     return row.split(',')
// });

// console.log(matches);

// reuseable code
const reader = new MatchReader('./football.csv');
reader.read();
// enum MatchResult {
//     HomeWin = 'H',
//     AwayWin = 'A',
//     Draw = 'D'
// }

let manUnitedWins = 0;

// console.log('reader.data', reader.data)

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);
