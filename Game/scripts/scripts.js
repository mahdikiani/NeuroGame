var now = new Date();
var start = now.getTime();

var BetweenStimuliTime = 300;    
var best = 100;
var worst = 0;
var rand;
// Appear Shapes           
function makeShapeAppear() {
    rand = Math.random();

    if (rand > 0.5){
	    var topOffset = 100;
	    var leftOffset = 200;
	    var red = 256;
	    var blue = 0;
	    var size =  100;
     }

    if (rand < 0.5){
	    var topOffset = 100;
	    var leftOffset = 400;
	    var red = 0;
	    var blue = 256;
	    var size =  100;
     }

    document.getElementById('shape').style.borderRadius = "50%";
    document.getElementById('shape').style.top = topOffset + "px";
    document.getElementById('shape').style.left = leftOffset + "px";
    document.getElementById('shape').style.backgroundColor = "rgb(" + red + ", " + 0 + ", " + blue + ")";
    document.getElementById('shape').style.width = size + "px";
    document.getElementById('shape').style.height = size + "px";
    document.getElementById('shape').style.display = 'block';

    start = new Date().getTime();
}

// Delay Function
function appearAfterDelay() {
    setTimeout(makeShapeAppear, BetweenStimuliTime);
}

appearAfterDelay();


// Keyboard Input Handle
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
	if(rand>0.5){endstimuli();}
    }
    else if(event.keyCode == 39) {
	if(rand<0.5){endstimuli();}
    }
});


// Touch/Click Input Handle
document.getElementById('shape').onclick = function () {
    endstimuli();
};


// Update after correct input
function endstimuli(){

    document.getElementById('shape').style.display = 'none';

    var end = new Date().getTime(),
        timeTaken = (end - start) / 1000;

        if (timeTaken > worst) {
            worst = timeTaken;
        }

        if (timeTaken < best) {
            best = timeTaken;
        }

    document.getElementById('timeTaken').innerHTML = timeTaken + 's';
    document.getElementById('timeBest').innerHTML = best + 's';
    document.getElementById('timeWorst').innerHTML = worst + 's';

    appearAfterDelay();
}


