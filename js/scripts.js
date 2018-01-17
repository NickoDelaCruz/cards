$(document).ready(function(){
  var cards = [];
  var suits = ["club", "spade", "heart", "diamond"];
  var numbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  suits.forEach(function(suit){
    numbers.forEach(function(number){
      var card = (number + " of " + suit + "s");
      $("#cards").append("<li>"+card+"</li>");
    });
  });

});
