// Array of Objects- constains key-value pairs.
// Eg:  products = [{},{},{},{}]

const products = [
    {id: 1, name:'Laptop', price: 1200},
    {id:2, name:'Phone', price: 800},
    {id:3, name:'Headphone', price:400}
];

// Return the list Names - [Laptop,Phone,Headphone]

const productNames = products.map((CurrentElement) => CurrentElement.name);
console.log(productNames);

// Calculate the discounted price using price for each product as 4th value in Obj.

const DiscountedProducts = products.map((product) => ({
    ...product, 
    DiscountedPrice:product.price*0.9 // ...product -> spread operator, Means all keyValue pairs
                                        // DiscountedPrice is key
     
}));

console.log(DiscountedProducts);

// Map another Value as ProductQuality - premium , midrange and Budget.
// Product less than 500 is Budget, product>500 & product<1000- Mid Range & product>1000 -  Premimum               

const AddQuality = products.map((product) => {
    let quality;
    if((product.price)<500){
        quality='Budget';
    } 
    else if ((product.price)>500 && (product.price)<1000){
            quality = "Mid-Level";
        }
        else
            { quality = "Premium";
            }

        return{
            ...product,ProductQuality:quality
    };
    });

    console.log(AddQuality);
    console.log(products);



