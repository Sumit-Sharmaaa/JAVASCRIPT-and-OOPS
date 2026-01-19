// Do not alter the starter code

const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 }
    ]
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 }
    ],
    discountCode: "COFFEELOVER"
  }
];

// Function to calculate the total value of all orders
// Apply discounts if applicable
function totalOrderValue(orders, applyDiscount) {
  // Map over each order to calculate its total value
  // Use the reduce method to sum the prices of all items in the order
  // Check if a discountCode is present and apply the discount using the provided callback function

//Step-1. Calculate the total value for each order
    const orderTotals = orders.map(order => {
//   Sum prices of items using reduce
        const itemsTotal = order.items.reduce((sum, item) => {
            return sum + item.price;
        }, 0);
// Apply the discount if discountCode exists
        const finalTotal = order.discountCode ? applyDiscount(order.discountCode, itemsTotal) : itemsTotal;

        return finalTotal;
    });

// Step-2: Sum all order totals
    const grandTotal = orderTotals.reduce((sum, value) => sum + value, 0);


// Step-3: return rounded to 2 Decimals
    return grandTotal.toFixed(2);
}

// Discount callback function

const applyDiscount = (discountCode, total) => {
    switch (discountCode) {
        case "COFFEELOVER":
            return total * 0.9;
        case "TEALOVER":
            return total * 0.8;
        default:
            return total;
    }
};