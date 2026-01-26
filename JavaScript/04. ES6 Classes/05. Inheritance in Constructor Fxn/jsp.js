// Inheritance in constructor function

// Through this eg we will get to know that why classes are better and we dont need to do that much
//  in classes that we will be doing in below example to access fuctions


function Vehicle(name,color,wheels){
    this.name=name;
    this.color=color;
    this.wheels=wheels;

}

Vehicle.prototype.getVehicleDetails= function() {
    console.log(`I have ${this.color} ${this.name} which has ${this.wheels} wheels.`);
}

function Car(color,wheels,brand,seats){
    Vehicle.call(this,"Bus",color,wheels); // Call() method which i studies earlier, binds this 
    this.brand=brand;
    this.seats=seats;

}
 
// Car.prototype = Object.create(Vehicle.prototype); // --Ignore this line for now

Car.prototype.getCarDetails= function(){
    console.log(`I have ${this.color} ${this.name} of ${this.brand} brand which has ${this.wheels} wheels and ${this.seats} seats.`)
}

const veh1 = new Vehicle("BMW","Blue",4);
console.log(veh1);

const car1= new Car("White",8,"BENZ",40);
console.log(car1);

veh1.getVehicleDetails(); // veh1 can access getVehicleDetails() function 
car1.getCarDetails();   // and car1 can access getCarDetails() function

// But car1 cannot access getVehicleDetails() function 

//car1.getVehicleDetails(); // cannot access  - Error- getVehicleDetails is not a function

// This is so because these functions are present inside prototype of constructor fxn of Vehicle which is inaccessible.
// And this is not because i have created function as prototypal property,
// The error would be same if i create getDetails function inside constructor also.

// Now to access make car access vehicle function 
// Object.Create() function will be used to do so, as it assigns the prototype of other Object 
// Now uncomment line No. 25 and check result of below lines.


//console.log(car1.__proto__);
//car1.getVehicleDetails();

// We cannot copy the car prototype to vehicle as car is created after vehicle and it would be wrong in top to border js execution.





