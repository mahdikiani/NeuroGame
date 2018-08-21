var now = new Date();
var start = now.getTime();


var BetweenStimuliTime = 10;
var p = 0.5;

var best = 100;
var worst = 0;
var data = [];
var seq;

var ball;
var shapes;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Appear Shapes           
function makeShapeAppear() {
    ball = getRandomInt(2);
    shapes = document.getElementsByClassName('shape');

    shapes[1 - ball].style.display = 'Block';
    shapes[ball].style.display = 'None';


    // document.getElementById('shape').style.borderRadius = "50%";
    // document.getElementById('shape').style.top = topOffset + "%";
    // document.getElementById('shape').style.left = leftOffset + "%";
    // document.getElementById('shape').style.backgroundColor = bgcolor;
    // document.getElementById('shape').style.width = size + "px";
    // document.getElementById('shape').style.height = size + "px";
    // document.getElementById('shape').style.display = 'block';

    start = new Date().getTime();
}

// Delay Function
function appearAfterDelay() {
    setTimeout(makeShapeAppear, BetweenStimuliTime);
}

appearAfterDelay();


// Keyboard Input Handle
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        if (ball == 1) {
            endstimuli();
        }
    } else if (event.keyCode == 39) {
        if (ball == 0) {
            endstimuli();
        }
    }
    if (event.keyCode == 27) {
        window.open("https://hband.ir/Neurogame/Game/get.php?time=" + data)
    }
});


// Touch/Click Input Handle
document.getElementsByClassName('shape').onclick = function () {
    endstimuli();
};


// Update after correct input
function endstimuli() {

    shapes[ball].style.display = 'none';

    var end = new Date().getTime(),
        timeTaken = (end - start) / 1000;

    if (timeTaken > worst) {
        worst = timeTaken;
    }

    if (timeTaken < best) {
        best = timeTaken;
    }

    data.push([seq, timeTaken]); //Save results
    document.getElementById('timeTaken').innerHTML = timeTaken + 's';
    document.getElementById('timeBest').innerHTML = best + 's';
    document.getElementById('timeWorst').innerHTML = worst + 's';

    appearAfterDelay();
}

function right() {
    if (ball == 0) {
        endstimuli();
    }

}

function left() {
    if (ball == 1) {
        endstimuli();
    }
}

function end() {
    window.open("https://hband.ir/Neurogame/Game/get.php?time=" + data)
}