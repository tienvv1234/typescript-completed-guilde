// NOTHING TO DO WITH GENERICS

const addOne = (a: number): number => {
    return a + 1;
}

const addTwo = (a: number): number => {
    return a + 2;
}

const addThree = (a: number): number => {
    return a + 3;
}

// we should add more parameters

const add = (a: number, b: number): number => {
    return a + b;
}

//-----------------------------------

class HoldNumber {
    data: number = 0;
}

class HoldString {
    data: string = '';
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = '123';

class HoldAnything<T> {
    data!: T;
}

const holdNumber1 = new HoldAnything<number>();
holdNumber1.data = 123;

const holdString1 = new HoldAnything<string>();
holdString1.data = '123';

//-----------------------------------