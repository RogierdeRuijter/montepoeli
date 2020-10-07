const MongoClient = require('mongodb').MongoClient;

module.exports = (dbParams, fn) => {
  let client;
  return MongoClient.connect(dbParams.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((iClient) => {
      client = iClient;
      return client.db(dbParams.dbName);
    })
    .then((db) => fn(db))
    .then((result) => {
      client.close();
      return result;
    });
};
