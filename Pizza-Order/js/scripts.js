function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaSelection1 = function(customerPizzaToppings) {
  if(this.toppings === "cheese"){
      return  13;
  } else if (this.toppings === "pepperoni") {
      return  15;
  } else (this.toppings === "vegetarian")
      return  16;
}



// Pizza.prototype.size = function (customerPizzaSize) {
//   var sizeCost= 0;
//   if(this.size === "small"){
//       sizeCost = 8;
//   } else if (this.size === "medium") {
//       sizeCost = 12;
//   } else (this.size === "large")
//       sizeCost = 14;
// };


// Pizza.prototype.cost = function (pizzaCost) {
//   return 'sizeCost' + 'toppingCost';
// };






// UI Logic ------------------

$(document).ready(function() {
  $("form#pizzaOrder").submit(function() {
    event.preventDefault();
    var customerPizzaSize = $("input[name=size]:radio:checked").val();
    var customerPizzaToppings = $("input[name=toppings]:radio:checked").val();
    var newPizza = new Pizza(customerPizzaSize,customerPizzaToppings);


    console.log(this.toppings);
      newPizza.pizzaSelection1();
    //
    $("btnsubmit#orderBtn").text("#orderDetail" + newPizza);

  });

});
