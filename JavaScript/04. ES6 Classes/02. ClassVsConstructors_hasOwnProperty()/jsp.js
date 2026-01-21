// ********** Notes *********
/*
We can see the difference b/w constructor and class in below eg and will also see that how class is very
similar to a constructor which doesnt have it own method and methods are created later using prototypal 
property.

*/



//1. Normal Constructor Function with getDetails() inside the constructor

function Vehicle(name, color, wheels){
    this.name = name;
    this.color = color;
    this.wheels = wheels;

    this.getDetails = function (){
    console.log(`The ${name} is ${color} in color and has ${wheels} wheels`);
}
};

const car = new Vehicle('Car','blue',4);
car.getDetails();
console.log(car.hasOwnProperty('getDetails')); // will return true as it is inside constructor



// 2. Class Declaration
class VehicleClass{
    name;
    color;
    wheels;
    
    constructor(name,color,wheels){ // constructor keyword in used
        this.color=color;
        this.name=name;
        this.wheels=wheels;
  }
    //Method
    getDetails(){
        console.log(`The ${this.name} is ${this.color} in color and has ${this.wheels} wheels`);
    }
}

const vehcl1 = new VehicleClass("Scooter","Grey",2); 
console.log(vehcl1); 
vehcl1.getDetails();
console.log(vehcl1.hasOwnProperty('getDetails')); // will return false as it is outside the constructor fxn



//3. Constructor Function with getDetails() as prototypal Property which is outside constructor fxn

function Vehicle2(name, color, wheels){
    this.name = name;
    this.color = color;
    this.wheels = wheels;

};

    Vehicle2.prototype.getDetails2 = function (){
    console.log(`The ${this.name} is ${this.color} in color and has ${this.wheels} wheels`);
}


const car2 = new Vehicle2('Car','blue',4);
car2.getDetails2();
console.log(car2.hasOwnProperty('getDetails2')); // will return true as it is inside constructor



// class is very similar to a constructor which doesnt have it own method and methods are created later using prototypal
//   property, However in class also we can create getDetails inside constructor fxn,
//  but it will copy into every object which gets created