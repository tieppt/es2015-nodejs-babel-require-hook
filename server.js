import express from 'express';
import {users} from './models/Users';

let app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.listen(3300, () => {
  console.log('Example app listening on port 3300!');
});