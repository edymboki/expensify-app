// Object Destructuring

// const person = {
//   name: 'Edgar',
//   age: 25,
//   location: {
//     city: 'Dar es Salaam',
//     temp: 31
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const {temp: temperature, city} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} degrees in ${city}`)
// }

// const book = {
//   title: 'Anti-Fragile',
//   author: 'Naseeb Taleb',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName)

// Array Destructuring

const address = ['69 Kidimbwi Street', 'Kinondoni', 'Dar es Salaam', '14110'];
const [, city = 'Arusha', , ] = address;
console.log(`You are in ${city}.`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [drink, , medium] = item;
console.log(`A medium ${drink} costs ${medium}`)