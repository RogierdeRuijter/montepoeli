module.exports = (db) => {
  let Users = db.collection('users');
  return Users
    .find({username: 'protractor'})
    .toArray() // Needed?
    .then(() => {
      return Users.deleteMany({username: 'protractor'});
    });
};
