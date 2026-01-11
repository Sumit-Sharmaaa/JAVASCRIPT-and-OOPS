let a = 'Global';

function OuterPrint(){
    let b = 'Outer Print';

    function InnerPrint(){
        let c = 'Inner Print';
        return `${a} -> ${b} -> ${c}`;
    }
    return InnerPrint;   // Returning the function not calling it thats y no paranthesis are used.
}
const show = OuterPrint();
console.log(show); // This will return the complete InnerPrint fxn









