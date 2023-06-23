export class Attributes<T extends {}> {

    constructor(private data: T) {}

    // K is a type of key of T
    // handle this to arrow functions
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    getAll(): T {
        return this.data;
    }

    set(update: T): void {
        Object.assign(this.data, update)
    }
}