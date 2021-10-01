
function showPopUp(){
	$('.pop-up').removeClass('hidden');
}

$("#close").click(function (){ 
	$('.pop-up').addClass('hidden');
});

$(".rules-btn").click(showPopUp);



var score= 0 ;

var userChoice;
var computerChoice;



$(".pick").click(function(){
	userChoice = this.id;
	computerChoice = Math.floor(Math.random() * 3);
	switch (computerChoice) { 
	case 0: computerChoice = "rock"; 
		break; 
	case 1: computerChoice = "paper"; 
		break; 
	case 2: computerChoice = "scissors"; 
		break; 
	}

	var result = compare(computerChoice).toUpperCase();

	$(".result").html("<h1>Result:</h1><p>User: " + userChoice.toUpperCase() + "<br>" +
										"Computer: " + computerChoice.toUpperCase() + "</p>" + "<p>" + result + "</p>"+ score);
});

function compare(comChoice) {
	if (userChoice === comChoice) {
    return "The computer also chose " + computerChoice + ":" + "<br>" + "the result is a tie! :\|";
	} else if (userChoice === "rock") {
		if (comChoice === "paper") {
      return "paper covers rock <br> You Lose :\(";
		} else if (comChoice === "scissors") {
               score +=1;
      return "rock crushes scissors <br> You Win! :\)";
		}
	} else if (userChoice === "paper") {
		if (comChoice === "rock") {
               score +=1;
			return "paper covers rock <br> You Win! :\)";
               
		} else if (comChoice === "scissors") {
			return "scissors cut paper <br> You Lose :\(";
		} 
	}else if (userChoice === "scissors") {
		if (comChoice === "rock") {
			return "rock crushes scissors <br> You Lose :\(";
		} else if (comChoice === "paper") {
               score +=1;
			return "scissors cut paper <br> You Win! :\)";
		}
	}
};



 


  