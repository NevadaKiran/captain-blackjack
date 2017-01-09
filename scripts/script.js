$(document).ready(function(){
  $("#stand").css({
    color:'blue',
    fontWeight: 'bold',
    backgroundColor:'red',
    // addClass("animated shake"),
    // $("#replay").addClass("animated shake"),
  });
});

// var wins = 0
// var losses = 0

// yourScore = 0
// dealerScore = 0

var getFirstRandomCard = function(card_id){
    var randomNumber = Math.floor((Math.random() * 23) + 1);
    document.getElementById(card_id).setAttribute("src", deckOfCards[randomNumber].imgSrc);
    // incrementScore
}

var deal = function() {
  card = Math.floor(Math.random() * 23 + 1);
  return card;
};


$("#replay").click(function() {
getFirstRandomCard("card-1");
getFirstRandomCard("card-2");
getFirstRandomCard("card3");
getFirstRandomCard("card4");
$('#"yourScore"').html('card-1.cardValue' + 'card-2.cardValue');

});

var getSecondRandomCard = function(hitCard_id){
    var randomNumber = Math.floor((Math.random() * 23) + 1);
    document.getElementById(hitCard_id).setAttribute("src", deckOfCards[randomNumber].imgSrc);
    // incrementScore
    // if busted
      // incrementLosses
      // startOver

}

$("#hit").click(function() {
getSecondRandomCard("hitCard1");
})
$("#hitAgain").click(function() {
getSecondRandomCard("hitCard3");
})

$("#stand").click(function(){
  while (card3.cardValue + card4.cardValue < 16) {
    getSecondRandomCard("hitCard2")
  }
})

// var playerScore = function() {
// } return(cardValue(card-1 + card-2))
// document.getElementById('playerScore').innerHTML = "Score: " + cardValue;
// var dealerhand = function(x, y) {
//     dealerScore = Math.floor(Math.random()*(21 - 17 + 1)+17);
//     return dealerScore;
// }
// function score() {

//     if ((cardValue(card1) + cardValue(card2)) > 22){
//         return "Busted!";
//     }
//     else if (getValue(dealerScore) > getValue(card1) + getValue(card2)){
//         return "You lose!";
//     }
//     else if (cardValue(dealerScore) === cardValue(card1) + cardValue(card2)){
//         return "Draw!";
//     }
//     else{
//         return cardValue(card1) + cardValue(card2);
//     }
// }
$( ".dealerScore" ).append( "<h2>Dealer Wins</h2>" );

// var score = cardValue
$( "p" ).append( "<strong>(cardValue)</strong>" );


var Card = function(suit, cardValue, imgSrc) {
  this.suit = suit;
  this.cardValue = cardValue;
  this.imgSrc = imgSrc;
}

var deckOfCards = []
deckOfCards[0] = new Card('clubs', 2, 'SVG-cards-1.3/2_of_clubs.svg');
deckOfCards[1] = new Card('clubs', 3, 'SVG-cards-1.3/3_of_clubs.svg');
deckOfCards[2] = new Card('clubs', 4, 'SVG-cards-1.3/4_of_clubs.svg');
deckOfCards[3] = new Card('clubs', 5, 'SVG-cards-1.3/5_of_clubs.svg');
deckOfCards[4] = new Card('clubs', 6, 'SVG-cards-1.3/6_of_clubs.svg');
deckOfCards[5] = new Card('clubs', 7, 'SVG-cards-1.3/7_of_clubs.svg');
deckOfCards[6] = new Card('clubs', 8, 'SVG-cards-1.3/8_of_clubs.svg');
deckOfCards[7] = new Card('clubs', 9, 'SVG-cards-1.3/9_of_clubs.svg');
deckOfCards[8] = new Card('clubs', 10, 'SVG-cards-1.3/10_of_clubs.svg');
deckOfCards[9] = new Card('clubs', 10, 'SVG-cards-1.3/jack_of_clubs2.svg');
deckOfCards[10] = new Card('clubs', 10, 'SVG-cards-1.3/queen_of_clubs2.svg');
deckOfCards[11] = new Card('clubs', 10, 'SVG-cards-1.3/king_of_clubs2.svg');

deckOfCards[12] = new Card('clubs', 2, 'SVG-cards-1.3/2_of_hearts.svg');
deckOfCards[13] = new Card('clubs', 3, 'SVG-cards-1.3/3_of_hearts.svg');
deckOfCards[14] = new Card('clubs', 4, 'SVG-cards-1.3/4_of_hearts.svg');
deckOfCards[15] = new Card('clubs', 5, 'SVG-cards-1.3/5_of_hearts.svg');
deckOfCards[16] = new Card('clubs', 6, 'SVG-cards-1.3/6_of_hearts.svg');
deckOfCards[17] = new Card('clubs', 7, 'SVG-cards-1.3/7_of_hearts.svg');
deckOfCards[18] = new Card('clubs', 8, 'SVG-cards-1.3/8_of_hearts.svg');
deckOfCards[19] = new Card('clubs', 9, 'SVG-cards-1.3/9_of_hearts.svg');
deckOfCards[20] = new Card('clubs', 10, 'SVG-cards-1.3/10_of_hearts.svg');
deckOfCards[21] = new Card('clubs', 10, 'SVG-cards-1.3/jack_of_hearts2.svg');
deckOfCards[22] = new Card('clubs', 10, 'SVG-cards-1.3/queen_of_hearts2.svg');
deckOfCards[23] = new Card('clubs', 10, 'SVG-cards-1.3/king_of_hearts2.svg');






// var Card = function(n,s) {
//         var number = n;
//         var suit = s;
//
//         this.getNumber = function(){
//                 return this.number;
//         },
//         this.getSuit = function(){
//                 return this.suit;
//         },
// };

// document.getElementsById("card").setAttribute("src", deckOfCards[randomNumber].imgSrc);

// var displayCard = {
//   "2_of_clubs.svg",
//   "3_of_hearts.svg" ,
//  "4_of_clubs.svg" ,
//  "5_of_clubs.svg" ,
//  "6_of_clubs.svg";
// }

// var replay = function() {
//
// var possibleCards = [("2_of_clubs.svg" = 2), ("3_of_hearts.svg" = 3),
// ("4_of_clubs.svg" = 4), ("5_of_clubs.svg" = 5), ("6_of_clubs.svg"= 6)],
// {
// function getRandomArbitrary(2, 6) {
//   return Math.random() * (possibleCards.lenght) + min;
// };

// $('#card1').html('<img src="img/2_of_clubs.svg"></img>')
// }}


// var dealerhand = function(17, 21) {
//     card = Math.floor(Math.random()*(21 - 17 + 1)+17);
//     return cardD; //should be return card;
// }

$('#card1').html('<img src="img/2_of_clubs.svg"></img>')



// Function: creates a random card
// var deal = function() {
    // Private local variables
    // var s = Math.floor(Math.random() * 4 + 1);
    // var n = Math.floor(Math.random() * 4 + 1);
