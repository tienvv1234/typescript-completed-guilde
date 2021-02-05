import { NumberCollection } from './NumberCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList'

const numbersCollection = new NumberCollection([10, 3, 5,-1]);
numbersCollection.sort();
console.log(numbersCollection);
// const sorter = new Sorter(numbersCollection);

// sorter.sort();
// console.log(sorter.collection);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection);
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(sorter.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();

linkedList.print();
// const sorter = new Sorter(linkedList);
// sorter.sort();
// // console.log(sorter.collection);
// linkedList.print();


// class Sorter {

//     constructor(public collection: number[] | string) {}

//     isArray(data: number[] | string):data is number[] {
//         return (data as number[]).map !== undefined;
//     }

//     sort(): void {
//         const { length } = this.collection;
//         for (let i = 0; i < length; i++) {
//             for (let j = 0; j < length - i - 1; j++) {
//                 // if(this.isArray(this.collection)){
//                 //     this.collection.map;
//                 // }

//                 // this.collection. will not suggest right thing
//                 // All of this only works if collection is number[]
//                 // if collection is an array of number

//                 //use type guard
//                 if(this.collection instanceof Array) {
//                     // this.collection. will suggest right thing
//                     // this collection is array of numbers
//                     if(this.collection[j] > this.collection[j + 1]) {
//                         const leftHand = this.collection[j];
//                         this.collection[j] = this.collection[j + 1];
//                         this.collection[j + 1] = leftHand;
//                     }
//                 }
                


//                 // Only going to work if collection is a string
//                 // if collection is a string, do this logic instead:
//                 // ~~~~Logic to compare and swap characters in a string

//                 if(typeof this.collection === 'string') {
                
//                 }
//             }
//         }
//     }
// }
