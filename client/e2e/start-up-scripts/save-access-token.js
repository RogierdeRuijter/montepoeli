module.exports = (db) => {
  let AccessToken = db.collection('accessToken');

  return AccessToken
    .insert({username: 'protractor'})
    .then(() => Users.insertOne({
      username: 'protractor',
      password: '$2a$10$x9n8Oeg5brp5V97APH8eGu7h6CciDlO57/iuTiIeBxLT8G834ddXW',
    }));
};
