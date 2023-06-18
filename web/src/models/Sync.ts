import axios, { AxiosPromise } from 'axios';

interface HasId {
    id: number;
}

export class Sync<T extends HasId> {
    constructor(private rootUrl: string) { }

    // async fetch(id: number): Promise<AxiosResponse<UserProps>> {
    fetch(id: number): AxiosPromise {
        // axios.get(`https://jsonplaceholder.typicode.com/users/${this.get('id')}`)
        //     .then((response: AxiosResponse): void => {
        //         this.set(response.data);
        //     })
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        const { id } = data;
        
        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            return axios.post(this.rootUrl, data);
        }
    }
}