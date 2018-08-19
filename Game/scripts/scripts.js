var now = new Date();
var start = now.getTime();


var BetweenStimuliTime = 300;
var p = 0.5;

var best = 100;
var worst = 0;
var data = [];
var seq;

var rand;
// Appear Shapes           
function makeShapeAppear() {
    rand = Math.random();

    if (rand > p) {
        var topOffset = 70;
        var leftOffset = 30;
        var bgcolor = '#D81C2B';
        var size = 100;
        seq = 0;
    }

    if (rand < p) {
        var topOffset = 70;
        var leftOffset = 70;
        var bgcolor = '#88CCF1';
        var size = 100;
        seq = 1;
    }

    document.getElementById('shape').style.borderRadius = "50%";
    document.getElementById('shape').style.top = topOffset + "%";
    document.getElementById('shape').style.left = leftOffset + "%";
    document.getElementById('shape').style.backgroundColor = bgcolor;
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
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        if (rand > p) {
            endstimuli();
        }
    } else if (event.keyCode == 39) {
        if (rand < p) {
            endstimuli();
        }
    }
    if (event.keyCode == 27) {
        window.open("https://hband.ir/Neurogame/get.php?time=" + data)
    }
});


// Touch/Click Input Handle
document.getElementById('shape').onclick = function () {
    endstimuli();
};


// Update after correct input
function endstimuli() {

    document.getElementById('shape').style.display = 'none';

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
    if (rand < p) {
        endstimuli();
    }

}

function left() {
    if (rand > p) {
        endstimuli();
    }
}

function end() {
    window.open("https://hband.ir/Neurogame/get.php?time=" + data)
}
