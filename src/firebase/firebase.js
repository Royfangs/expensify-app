import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('notes').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('notes').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
 
// database.ref('notes')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('notes').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('notes/-LU5okDkqs9hvCWcc6TO/company').set('Google');

// database.ref('notes/-LU5okDkqs9hvCWcc6TO/company').set('Amazon');

// database.ref('notes').push({
//   title: 'chef',
//   company: 'foody'
// });

// database.ref('notes/-LU5okDkqs9hvCWcc6TO').update({
//   title: 'manager'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   database.ref('age').set(28);
// }, 1500);

// setTimeout(() => {
//   database.ref().off();
// }, 2000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 3000);

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Erro fetching data', e);
//   });

//Set return a promise with void content

// database.ref().set({
//   name: 'Roy',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'software',
//     company: 'Google'
//   },
//   location: {
//     city: 'new taipei city',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((error) => {
//   console.log('this failer', error);
// });

// // database.ref().set('this data');

// database.ref('age').set(29);
// database.ref('location/city').set('Taipei');
// database.ref('attributes').set({
//   height: 170,
//   weight: 70
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('data was removed');
//   }).catch((e) => {
//     console.log('did not remove data');
//   });