import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    public events: Eventing = new Eventing();
    
    constructor(private data: UserProps) {}

    get(propName: string): (string | number) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
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