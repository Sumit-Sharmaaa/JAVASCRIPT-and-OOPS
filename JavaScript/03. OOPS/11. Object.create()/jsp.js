// Object.create()

// Along with Object creation using Literal or Construct we can also create object using .create()

const car = {
    name : 'Audi',
    getDetails(year) {
        console.log(`Your car make year is ${year}`);
    },
};

const car1 = Object.create(car);
console.log(car1);
car1.getDetails(2025);