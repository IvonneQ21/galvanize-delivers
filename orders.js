

var totalOrder = 0;
var totalTax = 0;

var buttonClass = document.getElementsByClassName("addToCart");
console.log(buttonClass)
var body = document.getElementById("table");

Array.from(buttonClass).forEach(function(element){
  element.addEventListener('click', createOrder)
})


function createOrder() {
  var tableRow = document.createElement("tr");
  var itemName = document.createElement("td");
  var itemPrice = document.createElement("td");
  itemName.innerText = this.name;
  itemPrice.innerText = this.value;

  tableRow.appendChild(itemName);
  tableRow.appendChild(itemPrice);
  body.appendChild(tableRow);
  calculate(this.value)
  return body;
};


function calculate(value) {
 var numVal = Number(value);
 var subtotal = document.getElementById('subtotal');
 var tax = document.getElementById('tax');
 var total = document.getElementById('grand_total');
 totalTax += (0.10 * numVal);
 totalOrder += numVal;
 var totalSum = totalOrder + totalTax;
 tax.innerText = totalTax.toFixed([2]);
 subtotal.innerText = totalOrder.toFixed([2]);
 total.innerText = totalSum.toFixed([2]);
}



 function check_info() {
   var name= document.getElementById('name').value;
   // this meand that the var name  is going to be equal to the value.
   var phone= document.getElementById('phone').value;
   var address= document.getElementById('address').value;
   if(name =="" || phone == "" || address == ""){
       alert('please fill in all fields');
       return false;
   } else {
  //  alert("Thank you for your order");
  return true;
 }
 }
