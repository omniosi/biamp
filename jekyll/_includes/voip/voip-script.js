// VoIP page JS
var voipPoster = document.getElementsByClassName('voip')[0].getElementsByClassName('poster')[0]
	;
// size poster height to match with proportionately
voipPoster.style.height = (voipPoster.clientWidth * 0.81) + "px";

// rotate dial art by mouse position
$(".poster").mousemove(function(event){
	var relX = event.pageX - $(this).offset().left;
	var relY = event.pageY - $(this).offset().top;
	var relBoxCoords = "(" + relX + "," + relY + ")";
	console.log("mouse position =" + relBoxCoords);
});
