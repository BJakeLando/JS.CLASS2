let consoleName = prompt("Enter console name: ");
let consoleQuantity = Number(prompt("Enter console quantity:"));
let consolePrice= Number(prompt("Enter the console price: "));

const salesTax = Number(consolePrice * .08);
let totalPrice = Number(consolePrice +salesTax);


document.getElementById("consoleInfo").innerHTML=`
<h2>Gaming Console Information</h2>
<p> Name of Console: ${consoleName}</p>
<p> Quantity: ${consoleQuantity}</p>
<p> Price:  $${consolePrice}</p>
<p> salesTax: $${salesTax}</p>
<p> Total: $${totalPrice}</p>
`;