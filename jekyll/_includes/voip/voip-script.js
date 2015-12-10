// VoIP page JS
var voipPoster = document.getElementsByClassName('voip')[0].getElementsByClassName('poster')[0]
	;
var dialOne =  voipPoster.getElementsByClassName('dial')[0];
var dialTwo =  voipPoster.getElementsByClassName('dial')[1];
// size poster height to match with proportionately
voipPoster.style.height = (voipPoster.clientWidth * 0.81) + "px";

// rotate dial art by mouse position
$(".poster").mousemove(function(event){
	var relX = event.pageX - $(this).offset().left;
	var relY = event.pageY - $(this).offset().top;
	var relBoxCoords = "(" + relX + "," + relY + ")";
	var screenWidth = window.outerWidth;
	var screenHeight = window.outerHeight;
	// var screenHeight = window.clientHeight;
	var percentage = ( screenWidth - relY ) / screenWidth * 100 + "%";
	// var percY = ( screenHeight - relY ) / screenHeight * 100 + "%";
	var percY = ( screenHeight - relY ) / screenHeight * 100;
	var turn = percY * 1.8;
	var text = document.getElementsByClassName("text")[0],
			textOne	 = document.getElementsByClassName("text")[1],
			textTwo	 = document.getElementsByClassName("text")[2],
			textThree = document.getElementsByClassName("text")[3],
			textFour	 = document.getElementsByClassName("text")[4],
			textFive	 = document.getElementsByClassName("text")[5],
			textSix		 = document.getElementsByClassName("text")[6];

	// console.log( "width percentage = " + percentage );
	console.log( "dial percentage = " + percY + "%" );
	console.log( "turn = " + turn + "deg" );
	console.log("mouse position =" + relBoxCoords);
	// dialOne.style.transform = dialOne.style.webkitTransform = "rotate(-" + relY + "deg)";
	// dialTwo.style.transform = dialTwo.style.webkitTransform = "rotate(" + relY + "deg)";
	// dialOne.style.transform = dialOne.style.webkitTransform = "rotate(-" + percY + "deg)";
	// dialTwo.style.transform = dialTwo.style.webkitTransform = "rotate(" + percY + "deg)";
	dialOne.style.transform = dialOne.style.webkitTransform = "rotate(-" + turn + "deg)";
	dialTwo.style.transform = dialTwo.style.webkitTransform = "rotate(" + turn + "deg)";
	// dialTwo.style.transformOrigin = dialTwo.style.webkitTransformOrigin = "50% 60%";

	// if( percY >= 30 && percY <= 60 ){
	if( turn >= 40 && turn <= 60 ){
		text.style.display = 			"none";
		textOne.style.display = 	"block";
		textTwo.style.display = 	"none";
		textThree.style.display = 	"none";
		textFour.style.display = 	"none";
		textFive.style.display = 	"none";
		textSix.style.display = 	"none";
	// }else if( percY >= 60 && percY <= 80 ){
	}else if( turn >= 60 && turn <= 80 ){
		text.style.display = 			"none";
		textOne.style.display = 	"none";
		textTwo.style.display = 	"block";
		textThree.style.display = 	"none";
		textFour.style.display = 	"none";
		textFive.style.display = 	"none";
		textSix.style.display = 	"none";
	// }else if( percY >= 80 && percY <= 100 ){
	}else if( turn >= 80 && turn <= 100 ){
		text.style.display = 			"none";
		textOne.style.display = 	"none";
		textTwo.style.display = 	"none";
		textThree.style.display = 	"block";
		textFour.style.display = 	"none";
		textFive.style.display = 	"none";
		textSix.style.display = 	"none";
	}else if( turn >= 100 && turn <= 120 ){
		text.style.display = 			"none";
		textOne.style.display = 	"none";
		textTwo.style.display = 	"none";
		textThree.style.display = 	"none";
		textFour.style.display = 	"block";
		textFive.style.display = 	"none";
		textSix.style.display = 	"none";
	}else if( turn >= 120 && turn <= 140 ){
		text.style.display = 			"none";
		textOne.style.display = 	"none";
		textTwo.style.display = 	"none";
		textThree.style.display = 	"none";
		textFour.style.display = 	"none";
		textFive.style.display = 	"block";
		textSix.style.display = 	"none";
	}else if( turn >= 140 && turn <= 160 ){
		text.style.display = 			"none";
		textOne.style.display = 	"none";
		textTwo.style.display = 	"none";
		textThree.style.display = 	"none";
		textFour.style.display = 	"none";
		textFive.style.display = 	"none";
		textSix.style.display = 	"block";
	}else{
		text.style.display = 			"block";
		textOne.style.display = 	"none";
		textTwo.style.display = 	"none";
		textThree.style.display = 	"none";
		textFour.style.display = 	"none";
		textFive.style.display = 	"none";
		textSix.style.display = 	"none";
	}
});