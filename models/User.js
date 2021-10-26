module.exports = (sequelize, DataTypes) => {
 const User = sequelize.define('User',  {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  birthdate: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  addresses: DataTypes.STRING
})
  return User;
};