const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};


const { firstName, lastName, age, address: { city, country } } = person;


console.log(firstName);
console.log(lastName);
console.log(age);
console.log(city);
console.log(country);   
