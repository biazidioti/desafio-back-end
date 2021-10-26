const jwt = require('jsonwebtoken');
const { User } = require('../models');

const create = (req, res) => {
  const { firstName, lastName, birthdate, email, password, addresses } = req.body;
  
  User.create({ firstName, lastName, birthdate, email, password, addresses })
    .then((newUser) => {
      const { userId,  firstName, lastName, birthdate, email, addresses } = newUser;
     const token = jwt.sign({ userId,  firstName, lastName, birthdate, email, addresses }, process.env.SECRET, { algorithm:'HS256'})
      res.status(200).json({ token });
    })
      .catch((e) => {
        console.log(e.message);
        res.status(500).send({ message: 'Algo deu errado' });
      });
}

module.exports =  { create };