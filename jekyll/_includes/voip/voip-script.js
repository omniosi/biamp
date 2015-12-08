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
	console.log("mouse position =" + relBoxCoords);
	dialOne.style.transform = dialOne.style.webkitTransform = "rotate(" + relY + "deg)";
	dialTwo.style.transform = dialTwo.style.webkitTransform = "rotate(-" + relX + "deg)";
	// dialTwo.style.transform = dialTwo.style.webkitTransform = "rotate(-" + relX + "deg)";
	dialTwo.style.transformOrigin = dialTwo.style.webkitTransformOrigin = "480px 472px";
	// dialTwo.style.transformOrigin = dialTwo.style.webkitTransformOrigin = "472px 480px";
});
