class Circle{
    constructor(radius){
        this.radius=radius;
    }
    getDiameter(){
        return this.radius*2;
    }
}


const circle1= new Circle(4);
console.log(circle1);
console.log(circle1.radius);
console.log(circle1.getDiameter()); 

console.log("_________________________________________________________________________");


//Now if i want to use diameter again and again i will have to call getDiameter again n again
// So it is better to have a property whcih will give me Diameter and also whose value i can set based on a passed parameter.
// So to get diameter again n again we will use getter function, it doesnt take any parameter.



class Circle2{
    constructor(radius){
        this.radius=radius;
    }

    get diameter(){
        return this.radius*2;
    } 

}


const circle2= new Circle2(4);
console.log(circle2);
console.log(circle2.diameter)

// But using get only i cannot set or change diameter
circle2.diameter = 16;
console.log(circle2.diameter); // Same output,we cannot change it directly,as its dependent on radius.
circle2.radius = 6;
console.log(circle2.diameter);



// Now to set the diameter Set function will be used.
// It takes exactly one parameter.

console.log("______________________________________________________________________");

class Circle3{
    constructor(radius){
        this.radius=radius;
    }

    get diameter(){
        return this.radius*2;
    } 

    set diameter(newDiameter){
        if(newDiameter>=0)
            this.radius=newDiameter/2;
        else
            console.log("Invalid Input as a diameter")
    }

}


const circle3= new Circle3(4);
console.log(circle3);
console.log(circle3.diameter)

circle3.diameter = 20; // this 20 is getting passed as a paramter i.e. newDiameter 
console.log(circle3.radius);
console.log(circle3.diameter);

circle3.diameter = -2;

// So diameter is dependent on radius.
// you can only set diameter using set 
// In set also it is depndent upon radius and we are changing the radius and diamter is changing.





