var nusach = new Audio('nusach.wav');
var currTimeOut = 0000;

$(document).ready(function()
{
	
}
);

function pause()
{
	nusach.pause();
}

function sing(startTime, endTime)
{
	clearTimeout(currTimeOut);
	nusach.pause();
	nusach.currentTime = startTime;
	nusach.play();
	currTimeOut =	setTimeout(
		function(){nusach.pause()}, 
		(endTime-startTime)*1000);
}