$(document).ready(function() {
  $("#shuffle").click(function(event) {
    event.preventDefault();
    var suits = ["hearts", "spades", "diamonds", "clubs"];
    var ranks = [
      "ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King"
    ];

    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        var card = (rank + " of " + suit)
        $("#cards").append("<li>" + card + "</li>");
      });
    });
  });
});