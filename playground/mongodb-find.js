const {MongoClient, ObjectID} = require('mongodb');
const MongoURL = 'mongodb://localhost:27017/ReferApp';

MongoClient.connect(MongoURL, { useNewUrlParser: true }, (err, client) => {
  if(err) return console.log('Unable to connect to MongoDB server');
  console.log('Connected to MongoDB server');

  const db = client.db('ReferApp');
  // db.collection('Recipes').find().count().then((count) => {
  //   console.log('Recipes');
  //   console.log(`Recipes count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch recipes', err);
  // });

  db.collection('Users').find({name: "Tom"}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  // client.close();
});
