//Business Logic----------

var order=function () {
  this.total="buildYourOwn"+"addOns"+"specials";

};
var basic = 9;

var addOns = function(){
  this.breadSticks === "$4.50";
  this.cinnaSticks === "$3.50"
  this.cheesyBread === "$5.50"
    if("input:radio[name=bread-sticks]:checked") return true;

}

var buildYourOwn = function(){
  this.cheese === 9.50;
  this.allMeats === 15.5;
  this.redSauce === 0;
  this.whiteSauce === 0;
  this.thinCrust === 0;
  this.thickCrust=== 0;
  this.stuffedCrust === 2;
  this.allVeggie === 12.50;
  
    if("input:radio[name=bread-sticks]:checked") return + basic;

}

var specials = function(){
  this.meat === "$4.50";
  this.hawaian === "$3.50"
  this.veggie === "$5.50"
    if("input:radio checked") return true;

}

// var cinnaSticks =
// var cheesyBread =


$(document).ready(function() {
  $("form#pizzaOrder").submit(function() {
    event.preventDefault();
    var breadSxticks = $("input:radio[name=bread-sticks]:checked").val();
    var cinnaSticks= $("input:radio[name=cinna-sticks]:checked").val();
    var cheesyBread = $("input:radio[name=cheesy-bread]:checked").val();


    $("#character").empty().append(character);
    $("#result").show();
// establish variables for the pizza (function) var for the topings, crust, sauce with arrays that include prices.

//var crustOptions = fucntion(crust) {
  //this.crust = ("stuffed","Thin","")
  });
// Variable for additional add ons,. write a function to clear the settings of the menu.
});
