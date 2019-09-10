function Pizza(size,toppings,cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost= cost;
}

Pizza.prototype.pizzaSelection1 = function(customerPizzaToppings) {
  if(this.toppings === "Cheese"){
      return (this.cost = 13);
  } else if (this.toppings === "Pepperoni") {
      return  (this.cost = 14);
  } else (this.toppings === "Vegetarian")
      return  (this.cost = 16);
}

// UI Logic ------------------

$(document).ready(function() {
  $("form#pizzaOrder").submit(function() {
    event.preventDefault();
    var customerPizzaSize = $("input[name=size]:radio:checked").val();
    var customerPizzaToppings = $("input[name=toppings]:radio:checked").val();
    var newPizza = new Pizza(customerPizzaSize,customerPizzaToppings);


// Submiting the new pizza to the user with the price selected.
    newPizza.pizzaSelection1();
    console.log(newPizza);

    $(".yourOrder").text(newPizza.pizzaSelection1());
    $(".confirm").text(customerPizzaSize + " " + customerPizzaToppings);




  });

});
