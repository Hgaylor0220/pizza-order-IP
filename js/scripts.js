function Pizza(order) {
  var total =0;
}



Pizza.prototype.size= function(){
  var small = 0;
  var medium = 0;
  var large = 0;
  // if (small.checked) {
  //   total === 10;
  // } else if (medium .checked) {
  //       total === 12;
  //   } else if(large.checked) {
  //       total === 14;
  //   } else {
      alert("Your Pizza cost 15");

};




// UI Logic ------------------

$(document).ready(function() {
  $("form#pizzaOrder").submit(function() {
    event.preventDefault();
    var newPizza = new Pizza() ;

    $ (newPizza.size);
    $("btnsubmit#orderBtn").text(".yourOrder" + newPizza)

  });
});
