// Encapsulation :-
// Encapsulation is hiding of the details we dont want to make public.
// Properties and Methods are created inside the class as private, So no one access those outside the class.


// NON ENCAPSULATED EXAMPLE

class VehicleClass1{
    //properties - These are public properties, and are optional here to declare, but private properties are must to mention here
    name;
    color;
    wheels;

    // constructor
    constructor(name,color,wheels){
        this.color=color;
        this.name=name;
        this.wheels=wheels;
    }

    // methods
    getDetails(){
        console.log(`This is a ${this.name} of ${this.color} color and has ${this.wheels} wheels`);
    }

}

const veh1 = new VehicleClass1('Scooter','black',2);
console.log(veh1);
veh1.getDetails();

// But here I can change the color or wheels count even outside the class.
veh1.name='Car';
console.log(veh1);
veh1.getDetails(); // So, here car cannot have 2 wheels.





