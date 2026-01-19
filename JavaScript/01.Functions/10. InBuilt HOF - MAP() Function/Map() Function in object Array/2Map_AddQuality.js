const products = [
    {id: 1, name:'Laptop', price: 1200},
    {id:2, name:'Phone', price: 800},
    {id:3, name:'Headphone', price:400}
];


// Map another Value as ProductQuality - premium , midrange and Budget.
// Product less than 500 is Budget, product>500 & product<1000- Mid Range & product>1000 -  Premimum               

const AddQuality = products.map((product) => { // product is current value i.e. where the index is currently
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
