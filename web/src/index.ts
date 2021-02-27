import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'myname', age: 30});

axios.post('http://localhost:3000/users', {
    name: 'myname',
    age: 20
});

