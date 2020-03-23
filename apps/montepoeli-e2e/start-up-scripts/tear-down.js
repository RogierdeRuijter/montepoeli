module.exports = (db) => {
  let Users = db.collection('users');
  let Games = db.collection('games');
  
  return Users
  .find({username: 'protractor'})
  .toArray()
  .then((users) => Games.deleteMany({white: users[0]._id.toString()}))
  .then(() => Users.deleteMany({username: 'protractor'}))
  .then(() => Users.deleteMany({username: 'protractor1'}));
};
