import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }
 
    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    get length(): number {
        return this.data.length;
    }
}

// use get to let length is property
// const test = new NumberCollection([1,2,3]);
// test.length