const {MongoClient, ObjectID} = require('mongodb');
const MongoURL = 'mongodb://localhost:27017/ReferApp';

MongoClient.connect(MongoURL, { useNewUrlParser: true }, (err, client) => {
  if(err) return console.log('Unable to connect to MongoDB server');
  console.log('Connected to MongoDB server');

  const db = client.db('ReferApp');
  // db.collection('Recipes').insertOne({
  //   name: 'Apple Pie',
  //   createdBy: 'Tom'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert recipe', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // const db = client.db('ReferApp');
  // db.collection('Users').insertOne({
  //   name: 'Tom',
  //   age: 66,
  //   location: 'Bend, Oregon'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert user', err);
  //   }

  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
