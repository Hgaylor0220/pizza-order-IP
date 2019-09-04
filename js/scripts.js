function Pizza(order) {
  this.toppings=order;
}



Pizza.prototype.toppings= function(){
  var pep = "15" ;
  var cheese = "13";
  var veggie = "14";
    if(pep === true || cheese === true|| veggie=== true) {
      return ("Pizza cost 15 ")
    } else {
      alert("Please select a topping");
    }
}




// UI Logic ------------------

$(document).ready(function() {
  $("form#pizzaOrder").submit(function() {
    event.preventDefault();
    var newPizza = new Pizza($("input:radio:checked").val()) ;
    var topping = toppings;




    $(newPizza.toppings);
    $("btnsubmit#orderBtn").text(".yourOrder" + " "+ "$15");

  });
});
