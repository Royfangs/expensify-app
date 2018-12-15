// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'NY',
//     temp: 92,
//     popularity: 200,
//     mayor: 'Tailor'
//   }
// };

// const { name: firstName = 'Anonumous', age } = person;

// const { city, temp: temperature, ...rest } = person.location;

// console.log(`${firstName}'s age is ${age}`);

// console.log(`It's ${temperature} in ${city} ${rest.mayor}`);


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);



//Array destructuring

// const address = ['1299 $ Juniper Street', 'NY', 'Peeny', '19147'];

// const [street, city, state, zip] = address;

// console.log(`You are in ${city} ${state}`)

const item = ['coffee (ice)', '$2.00', '$2.90', '$2.75'];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);