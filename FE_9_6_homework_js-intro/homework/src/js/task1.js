var amount = parseFloat(prompt('amount of money'));
let discount = parseFloat(prompt('discount'));
let seyved = amount * discount / 100;

if (amount <=0 || isNaN(amount) || discount<0 || isNaN(discount) || discount % 1 !== 0 || discount >=100){
    alert('invalid data');
} else if (discount === 0) {
    console.log(`Price without discount: ${amount} 
        Discount: ${discount} % 
        Price with discount: ${amount}
        Saved: 0`);
} else {
    console.log(`Price without discount:  ${amount} 
    Discount: ${discount} %
    Price with discount: ${(amount - seyved).toFixed(2)}
    Saved: ${seyved.toFixed(2)}`);
}
