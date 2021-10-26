const { User } = require('../models');

const create = (req, res) => {
  const { firstName, lastName, birthdate, email, password, addresses } = req.body;

  User.create({ firstName, lastName, birthdate, email, password, addresses })
    .then((newUser) => {
      const { userId,  firstName, lastName, birthdate, email, addresses } = newUser;

      res.status(200).json({ userId,  firstName, lastName, birthdate, email, addresses });
    })
      .catch((e) => {
        console.log(e.message);
        res.status(500).send({ message: 'Algo deu errado' });
      });
}

module.exports =  { create };