var now = new Date();
var start = now.getTime();

var max_showing_ball = 10;
var BetweenStimuliTime = 100;
var p = 0.5;

var best = 100;
var worst = 0;
var score = 0;
var data = [];
var seq;

var ball;
var shapes;

var game_state = 'stop';
var ball_to_end = max_showing_ball;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Appear Shapes           
function makeShapeAppear() {
    ball = getRandomInt(2);
    ball_to_end -= 1;
    seq = ball;
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
    if (ball_to_end > 0)
        setTimeout(makeShapeAppear, BetweenStimuliTime);
    else
        end();
}


// Keyboard Input Handle
document.addEventListener('keydown', function (event) {
    if (game_state == 'run') {
        if (event.keyCode == 37) {
            if (ball == 1) {
                endstimuli();
            }
        } else if (event.keyCode == 39) {
            if (ball == 0) {
                endstimuli();
            }
        }
    }
    if (event.keyCode == 27) {
        end();
    }
});


// Touch/Click Input Handle
// document.getElementsByClassName('shape').onclick = function () {
//     endstimuli();
// };


// Update after correct input
function endstimuli() {

    shapes[ball].style.display = 'none';

    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;

    worst = Math.max(timeTaken, worst);
    best = Math.min(timeTaken, best);
    score += 1 / timeTaken;

    data.push([seq, timeTaken]); //Save results
    document.getElementById('timeTaken').innerHTML = timeTaken + 's';
    document.getElementById('timeBest').innerHTML = best + 's';
    document.getElementById('timeWorst').innerHTML = worst + 's';
    document.getElementById('score').innerHTML = Math.round(score, 2);

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
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            now = new Date();
            start = now.getTime();

            best = 100;
            worst = 0;
            score = 0;
            data = [];

            document.getElementById("score").innerHTML = score;
        }
    };
    xhttp.open("GET", "get.php?date=" + now + "&time=" + JSON.stringify(data), true);
    xhttp.send();

    game_state = 'stop';
    init();

    // window.open("https://hband.ir/Neurogame/Game/get.php?time=" + data)
}

function init() {
    // container = document.getElementsByClassName('container')[0];
    // container.style.paddingTop = window.screen.availHeight * .1 + 'px';;
    if (game_state == 'run') {
        document.getElementById('overlay-end').style.display = 'none';
    } else {
        document.getElementById('overlay-end').style.display = 'block';
    }

    // container.style.left = 0;
    // container.style.bottom = window.screen.height + 'px';
    // container.style.right = window.screen.width + 'px';
    // container.style.position = 'fixed';
}

function start_game() {
    ball_to_end = max_showing_ball;
    game_state = 'run';
    best = 100;
    worst = 0;
    score = 0;
    data = [];
    init();
    appearAfterDelay();
}

init();