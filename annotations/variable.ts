const apples = 5;



const nothingMuch: null = null;
const nothing: undefined = undefined;

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// when to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let index = 0; index < words.length; index++) {
    if (words[index] === 'green') {
        foundWord = true;
    }
}