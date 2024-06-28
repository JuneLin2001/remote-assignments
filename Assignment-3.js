function calculate(data) {
    // your code here
    let { discount, products } = data;
    let totalPrice = 0;
    
    for (let i = 0; i < products.length; i++) {
        let discountedPrice = products[i].price * (1 - discount);
        totalPrice += discountedPrice;
    }
    return totalPrice;
}
const discountedPrice = calculate({
    discount: 0.1,
    products: [
            {
                    name: "Product 1",
                    price: 100
            },

            {
                    name: "Product 2",
                    price: 700
            },

            {
                    name: "Product 3",
                    price: 250
            }
    ]
});

console.log(discountedPrice) // show the total price of all products after applying a discount