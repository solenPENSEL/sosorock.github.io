
var cardsCurrentlyOpened = [];
var cardsWon = [];
var numberCards = 2; //Min

$(document).ready(function() {

  
  setTimeout(function() {
    $(".card").click(turnAround);
    $(".reset").click(resetGame);
  }, 1200);
  

  numberCards = $(this).find(".thumbnail").length / 2;
  console.log("Number of cards: " + numberCards);
});



function turnAround() {
  var elements = $(this).find(".thumbnail");
  for (var i = 0; i < elements.length; i++) {
    var champName = elements.find(".champName").html(); //NAme of the champion in the clicked card
    console.log("Card clicked: " + champName);
    //If the card is showing
    if (elements[i].className == "thumbnail") {
      //prevents from turning the card for 1 sc
      if (cardsCurrentlyOpened.length != 2) {
        elements[i].className += " rotated"; //rotate it
        cardsCurrentlyOpened.push(champName);
        console.log("Revealing card");
      } else {
        console.log("Wait for cards to turn around");
      }
    } else {
      console.log("Card already turned");
    }
  }

  //If 2 cards are returned at this moment
  if (cardsCurrentlyOpened.length == 2) {
    setTimeout(function() {
      resetCards();
    }, 1200);
  }

  console.log(cardsCurrentlyOpened);
}

//What happens after 2 cards have been returned
function resetCards() {
  console.log("Resetting cards");

  //Are they the same champ?
  if (cardsCurrentlyOpened[0] == cardsCurrentlyOpened[1]) {
    console.log("Same cards== lock rotated");
    cardsWon.push(cardsCurrentlyOpened[0]);
    $(".champName").each(function(index) {
      if ($(this).text() == cardsCurrentlyOpened[0]) {
        $(this).css("background-color", "darkgreen");
      }
    });
  } else {
    console.log("Put cards back again");
    $("figure").each(function(index) {
      if (
        !cardsWon.includes(
          $(this)
            .find(".champName")
            .html()
        )
      ) {
        $(this).removeClass("rotated");
      }
      $(this)
        .find(".champName")
        .addClass("cardwon");
    });
  }



  console.log("Emptying opened cards");
  cardsCurrentlyOpened = [];
}

