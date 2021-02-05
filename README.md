typescript = javascript + a Type system

the ts type system :

- Helps us catch errors during development
- Uses 'type annotations' to analyze our code
- Only active during development
- doesn't provide any performance optimization

tsc stand for typescript compiler

tsc index.ts compiler to js

ts-node index.ts is build and running the index.js

### type of typescript

type: is easy way to refer to the different properties + function that a value has

Type Annotations + Type Inference apply to (Variables, Functions, Objects):

Definition
Type annotations: Code we add to tell Typescript what type of value a variable will refer to

type inference: Typescript tries to figure out what type of value a variable refers to (if we use declare type and assign in a same line typescript will use type inference for use. eg: let apples = 5)

Compare:
Type annotations type inference
We (developers) tell typescript the type Typescript guesses the type

Inf:
Type annotations:

- When we declare a variable on one line then initialize it later
- When we want a variable to have a type that can't be inferred
- When a function returns the 'any' type and we need to clarify the value
  type Inference
- always

type any

- A type, just as 'string' or 'boolean' are
- Means ts has hno idea what this is - can not check for correct property references
- Avoid variables with 'any' at all costs

### Tuples
- Definition
Array-like structure where each element represents some property of a record

- why do we care

### Interfaces
- Definition
Creates a new type, describing the property names and vlue types of an object

General strategy for reusable code in ts
+ Create functions that accept arguments that are typed with interface types
+ Objects/class can decide to implement a given interface to work with a function

### classes
- Definition
Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'
+ first: Define a set of fields (values) and methods (functions) to represent a 'thing'
+ second: define a set of 

type function

- Type Annotation for function: Code we add to tell typescript what type of arguments a function will receive and what type of values it will return

- Type Inference for function: Typescript tries to figure out what type of value a function will return

never type means never rich the end of function, never execute function completely

### Tool parcel-bundler
command: npm install -g parcel-bundler
parcel index.html
Tool to help us run ts in the browser

how it work:
we can run script of index.ts in the browser, parcel-bundler will see the script tag and parse code inside the ts file to js and replace this script tag

### Type Definition file
is a adapter layer between typescript code and javascript library
- some time the type definition is installed when we install js library
like axios library, we don't need to create type definition of it, because it has already had the type definition by default

tsc will compile the root directory code to build folder and -w is watch

type Guard
- typeof Narrow type of a value to a primitive type 'string| number | boolean | symbol'

- instanceof narrow down every other type of value

### Abstract  classes
- Can't be used to create an object directly
- Only used as a parent class
- Can contain real implementation for some methods
- the implemented methods can refer to other methods that don't actually exist yet ( we still have to provide name and types for the un-implemented methods)
- Can make child classes promise to implement some other method
