
context = new webkitAudioContext();
//var osc = document.getElementById("osc");
var canvas = document.getElementById('canvas');

if(canvas.getContext){
	var ctx = canvas.getContext('2d');
	fillColor();
}

function getRandomCode(){
	return  Math.floor(Math.random()*255);
}

function fillColor(){
	var r = getRandomCode(),
		g = getRandomCode(),
		b = getRandomCode();

	ctx.fillStyle = "rgb("+r+","+g+","+b+")";
	ctx.fillRect(25, 25, 450, 450);
}

canvas.onmousemove = function(e){
	fillColor();
	generateMusic(e.clientY*100);
} 

function generateMusic(f){
	
	var	oscillator = context.createOscillator(),
		now = context.currentTime;
		oscillator.type = 0;
		oscillator.frequency.value = f;
		oscillator.connect(context.destination);
		oscillator.noteOn(0);
		oscillator.noteOff(now + .1);
		console.log("The current time is" +context.currentTime)
}

function stopMusic(){
	oscillator.disconnet();
}

/*
*
* CANVAS ELEMENT
*
*/