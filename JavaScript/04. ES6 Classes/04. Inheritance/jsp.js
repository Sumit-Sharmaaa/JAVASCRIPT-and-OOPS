// Inheritance

class Vehicle {
    // constructor
    constructor(name,color,wheels){
        this.name=name;
        this.color=color;
        this.wheels=wheels;

    }   
    
    //methods
    getDetails(){
        console.log(`This is a ${this.name} of ${this.color} color and has ${this.wheels} wheels`);
    }


} 

// Say Car class have 5 properties with 3 common properties as that of Vehicle and 2 new 
// So, we will inherit the Vehicle class using extends keyword 
// and to include 3 parameters of parent class super() keyword is used brfore initializing other properties.
// Along with properties the Methods also get inherited and can be used ny child class.

class Car extends Vehicle {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    constructor(color, brand, purpose) { // parameters reqd from users and that are not hardcoded
        super("car",color,4); // car and wheels are hardcoded
        this.brand=brand;
        this.purpose=purpose;
    }

// Car class can also has its own getDetails() function, it will get Override.
// If car() class has its own getDeatils then that function will be called, if car class doesnt have its own
// then parents getDetails fxn gets called.

getDetails(){
    console.log(`This is a ${this.name} of brand ${this.brand} in ${this.color} color and has ${this.wheels} wheels`)
}

}

const car1= new Car("Red","Audi","Travelling");
console.log(car1);// In output car1 object doesn;t have get Details
car1.getDetails(); // still get Details method  is accesible to child