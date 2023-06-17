import axios, { AxiosResponse } from 'axios';
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
    events: {[key: string]: Callback[] } = {};

    constructor(private data: UserProps) {}

    get(propName: string): (string | number) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || []
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];
        if(!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => {
            callback();
        })
    }

    async fetch(): Promise<AxiosResponse> {
        // axios.get(`https://jsonplaceholder.typicode.com/users/${this.get('id')}`)
        //     .then((response: AxiosResponse): void => {
        //         this.set(response.data);
        //     })
        return await axios.get(`https://localhost:3000/users/${this.get('id')}`)
    }

    save(): void {
        const id = this.get('id');
        if (id) {
            axios.put(`https://localhost:3000/users/${id}`, this.data);
        } else {
            axios.post(`https://localhost:3000/users`, this.data);
        }
    }
}