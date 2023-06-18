import { User } from './models/User';
import axios from 'axios';

// const user = new User({ name: 'myname', age: 30});

// user.on('change', () => {
//     console.log('changed');
// });

// console.log(user);

// axios.post('http://localhost:3000/users', {
//     name: 'myname',
//     age: 20
// });

const user = new User({ id: 1});

user.events.on('change', () => {
    console.log('changed');
});

user.events.trigger('change');