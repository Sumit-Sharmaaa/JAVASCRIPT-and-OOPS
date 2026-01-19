let a = 'Global';

function OuterPrint(){
    let b = 'Outer Print';

    function InnerPrint(){
        let c = 'Inner Print';
        return `${a} -> ${b} -> ${c}`;
    }
    const show = InnerPrint();
    console.log(show);
}
OuterPrint();