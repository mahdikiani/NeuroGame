var now = new Date();
var start = now.getTime();

var BetweenStimuliTime = 300;    
var best = 100;
var worst = 0;


function right(){
    window.alert("right");
}


function left(){
    window.alert("left");
}

           
function makeShapeAppear() {
    var rand = Math.random();

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


function appearAfterDelay() {
    setTimeout(makeShapeAppear, BetweenStimuliTime);
}

appearAfterDelay();





document.getElementById('shape').onclick = function () {

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

};

// footer
var year = now.getFullYear();
var copyright = '&copy; ' + year + ' Larry Tooley';

document.getElementById('copyright').innerHTML = copyright;
