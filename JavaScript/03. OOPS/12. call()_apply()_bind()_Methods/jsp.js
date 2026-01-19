// These functions are used to call a fxn of an object into another object which doesnt have that fxn.
// It helps in reducing redundancy of code.
// It binds the 2nd object to the function of First object along with its parameters.

const car = {
    name:'car',
    color: 'black',
    getDetails(brand,seats) {
        console.log(`This is a ${this.color} ${this.name} of ${brand} company. It has ${seats} seats`);
    }
}

const bus = {
    name:'bus',
    color: 'blue'
}

// To call getDetails() with bus object

car.getDetails.call(bus,'Star',50); // here first parameter passed is this object and rest are arguments
           
                        // OR

car.getDetails.apply(bus,['Gold',30]); // only diff. from call is parameters are passed in square brackets 

                        // OR
                
const vehicle1 = car.getDetails.bind(bus); // bind bounds to one object and for that object method is reusable.
vehicle1('silver',20);
vehicle1('bronze',45);


