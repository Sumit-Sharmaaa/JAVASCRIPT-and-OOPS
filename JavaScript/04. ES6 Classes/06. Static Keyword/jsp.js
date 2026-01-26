// Static Keyword

// We can create static properties and methods in the class ,
//  So those methods which are created as static will not be attached/linked to any of the instances which gets lated created from that class. 
// It will actually be invoked by class itself

class Vehicle{

    static varName = "Static Var";

    // constructor 
    constructor(name,color,wheels){
        this.name=name;
        this.color=color;
        this.wheels=wheels;
    }

    // Non static method
    getdetails(){
        console.log(`The ${this.name} is  ${this.color} in color. It has ${this.wheels} wheels`);
    }

    // static method
    static showMessage(){
        console.log("This is the static method of the class");
    }
}

const v1 = new Vehicle("Car","Blue",4);
console.log(v1); // Here in output we cannot see the showMessage() method

// v1.showMessage(); // will give Error
// since showMessage is static so its not attched to the instance created i.e. v1

// showMessage() can only ber called by the class itself.

Vehicle.showMessage();

// Eg's of static methods- Number.parseInt, Number.parseFloat here they are invoked with Number class only.
//console.log(varName);  // Error
console.log(Vehicle.varName);
