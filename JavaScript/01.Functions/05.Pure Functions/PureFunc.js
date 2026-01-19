/*
PURE FUNCTION
Pure Functions are functions which returns same output for same set of inputs. So that means its output
cannot be minimilated by any external factor and only inside variables or functions can minimilate.
*/

//Pure Function - Output completely depends upon num1 & num2 and not on any external factor
function calculate(num1,num2)
{
    return num1*num2;
}
console.log(calculate(4,6));


// Impure Function - Output do Depends upon Discount which is external value and can be changed.
const discount = 25;
function calculateDiscount(price) 
{
    return price-discount;
}

// A function is called as an impure function also when it manipulates any external value inside the function
// For eg- in above eg if i do -> Discount = Discount-5; inside calculateDiscount Function.
// Then also the fxn will be considered as an impure function.
// Therefore something which doesnot belong to function should not get manipulated inside the function if it does, then that function is again known as impure function.
// If we use the console.log function then also the function will become impure fxn as it comes from Windows Web API

