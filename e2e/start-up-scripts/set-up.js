// const addLoginUser = import('./add-protractor-user');

module.exports = (db) => {
  // return addLoginUser;

  let Users = db.collection('users');

  return Users
    .deleteMany({username: 'protractor'})
    .then(() => Users.insertOne({
      username: 'protractor',
      password: '$2a$10$x9n8Oeg5brp5V97APH8eGu7h6CciDlO57/iuTiIeBxLT8G834ddXW',
      name: 'protractor'
    }))
    .then(() => Users.insertOne({
        username: 'protractor1',
        password: '$2a$10$x9n8Oeg5brp5V97APH8eGu7h6CciDlO57/iuTiIeBxLT8G834ddXW',
        name: 'protractor1'
    }));
  // return Promise.all([
  //   addLoginUser
  // ]);
};
