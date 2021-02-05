import { NumberCollection } from './NumberCollection';

interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void
}

export abstract class Sorter {
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;
    // constructor(public collection: Sortable) {}

    sort(): void {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if(this.compare(j, j + 1)){
                    this.swap(j, j + 1)
                }
            }
        }
    }


    // isArray(data: number[] | string):data is number[] {
    //     return (data as number[]).map !== undefined;
    // }

    // ver 1
    // sort(): void {
    //     const { length } = this.collection;
    //     for (let i = 0; i < length; i++) {
    //         for (let j = 0; j < length - i - 1; j++) {
    //             if(this.collection[j] > this.collection[j + 1]) {
    //                 const leftHand = this.collection[j];
    //                 this.collection[j] = this.collection[j + 1];
    //                 this.collection[j + 1] = leftHand;
    //             }
    //         }
    //     }
    // }
}