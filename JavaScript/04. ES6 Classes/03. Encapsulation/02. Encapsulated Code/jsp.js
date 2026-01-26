// ENCAPSULATED EXAMPLE

class VehicleClass2{
    //properties - Public properties are optional, but private properties are must to mention here
    // To decalre private property # is used befor name of the property
    // Private properties are introduced in JS in 2022 only.

    //Private property
    #registrationNo;

    // constructor
    constructor(name,color,wheels, regNo){
        this.color=color;
        this.name=name;
        this.wheels=wheels;
        this.#registrationNo = regNo;
    }

    // methods
    getDetails(){
        console.log(`This is a ${this.name} of ${this.color} color and has ${this.wheels} wheels.
            It's Reg No. is - ${this.#getNo(this.#registrationNo)}`);
    }

    // Private Method
    #getNo(number){
        return number;
    }

}

const veh2 = new VehicleClass2('Scooter','black',2,'0707');
console.log(veh2);
veh2.getDetails();

// Now accessing private properties outside is not allowed, not even consoling is not allowed.

// console.log(veh2.#registrationNo); // Will give Error
// veh2.#registrationNo= 9999; // Will give Error


//veh2.#getNo();
