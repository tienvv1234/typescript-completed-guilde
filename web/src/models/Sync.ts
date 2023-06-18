import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';


export class Sync {
    constructor(private rootUrl: string) { }

    // async fetch(id: number): Promise<AxiosResponse<UserProps>> {
    fetch(id: number): AxiosPromise {
        // axios.get(`https://jsonplaceholder.typicode.com/users/${this.get('id')}`)
        //     .then((response: AxiosResponse): void => {
        //         this.set(response.data);
        //     })
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: UserProps): AxiosPromise {
        const { id } = data;
        
        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            return axios.post(this.rootUrl, data);
        }
    }
}