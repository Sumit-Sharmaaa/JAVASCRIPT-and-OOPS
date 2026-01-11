//convert it to arrow function
  // function calculateTotalTillDate(perYearBalance) {
  //   let total = 0;
  //   for (let i = 0; i < perYearBalance.length; i++) {
  //     total += perYearBalance[i];
  //   }
  //   return total;
  // }


// In arrow
const calculateTotalTillDate = (perYearBalance) => {
    let total =0;
    for(i=0; i<perYearBalance.length; i++){
        total = total+perYearBalance[i];
    }
    return total;
}

console.log(calculateTotalTillDate(12));

  
  //convert it to arrow function
  // function adjustTotalOfYear(year, adjustmentFactor) {
  //   yearData[year] *= adjustmentFactor;
  // }

  // In arrow
  const adjustTotalOfYear = (year,adjustFactor) => yearData[year] *= adjustFactor;

