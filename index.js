const express = require('express');
const bodyParser = require('body-parser');
const User = require('./controller/user');

const app = express();

app.use(bodyParser.json());

app.post('/user', User);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
