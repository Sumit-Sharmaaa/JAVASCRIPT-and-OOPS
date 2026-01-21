// Constructor Function

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


// Now we'll be doing the same thing as above but Using ES6 classes now

// CLASSES IN JS
// class name should start with capital letter
// Format of a class - It has below things :- 
// 1. Properties (defined in or later may b) 
// 2. constructor Function - (If u have values to initialize, So optional if we dont have anything to initialize)
// 3. Methods


// Class Declaration
class VehicleClass{
    name;
    color;
    wheels;
    //These above properties are not declarion it is just mentioning for better practices & can be skipped

    constructor(name,color,wheels){ // constructor keyword in used
        this.color=color;
        this.name=name;
        this.wheels=wheels;
        // Methods can also be passed in constructor fxn, but its better to create it seperately to
        //  avoid copying of it to every object which is getting created. 
    }

    //Methods
    getDetails(){
        console.log(`The ${this.name} is ${this.color} in color and has ${this.wheels} wheels`);
    }
}

// * To create instance of this class
// very similar to constructor function , create a variable use new keyword with className.

const vehcl1 = new VehicleClass("Scooter","Grey",2); 
//In VehicleClass()-Need to pass parameters of constructor if any in this paranthesis during creation only.

console.log(vehcl1); // will give the color, name , wheels and not getDetails
vehcl1.getDetails();


// ********** Notes *********
/*
1. Above way of creating class is called class Declaration
2. Another way of creating is using Class expression.
const VehicleClass2 = class {

};

3. Class automatically gets executed in strict mode only. 
4. Classes are not hoisted like functions do in JS.
*/
