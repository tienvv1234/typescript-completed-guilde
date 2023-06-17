 class ArrayOfNumber {
     constructor(public collection: number[]) {}

     get(index: number): number {
         return this.collection[index];
     }
 }

class ArrayOfString {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnyThing<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnyThing<string>(['a', 'b', 'c']);

/// example of generics with functions

function printStrings(arr: string[]): void {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(element);
    }
}

function printNumbers(arr: number[]): void {

}

function printAnything<T>(arr: T[]): void {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(element);
    }
}

const abc = printAnything<string>(['a', 'b', 'c']);

const def = printAnything([1, 2, 3]); // inference type

// generic constraints

class Car {
    print(){
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a House');
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        element.print();
    }
}

printHousesOrCars<House>([new House(), new House()])
printHousesOrCars<Car>([new Car(), new Car()])