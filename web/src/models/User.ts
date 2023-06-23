import { Sync } from './Sync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';
interface UserProps {
    name?: string;
    age?: number;
    id?: number;
}

const rootUrl = 'http://localhost:3000/users';
export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes: Attributes<UserProps>;

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs);
    }

    // whenever we use this get, we no longer need () 
    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: UserProps) {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    async fetch(): Promise<void> {
        const id = this.get('id');
        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id');
        }

        const response: AxiosResponse = await this.sync.fetch(id);
        this.set(response.data);
    }

    async save(): Promise<void> {
        try {
            const response: AxiosResponse = await this.sync.save(this.attributes.getAll());
            this.trigger('save');
        } catch (error) {
            this.trigger('error');
        }
    }
}