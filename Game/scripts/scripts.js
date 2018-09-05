var now = new Date();
var start = now.getTime();

var max_showing_ball = 60;
var BetweenStimuliTime = 300;
var BetweenActTime = 100;
var p = 0.5;

var best = 100;
var worst = 0;
var score = 0,
    highscore = 0;
var data = [];
var this_ball_data = [];
var seq;

var ball;
var shapes;

var game_state = 'stop';
var ball_to_end = max_showing_ball;
var appearTimeout;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout && !appearTimeout;
        if (!timeout) {
            // clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        }
        if (callNow) func.apply(context, args);
    };
};

// Appear Shapes           
function makeShapeAppear() {
    clearTimeout(appearTimeout);
    appearTimeout = null;
    ball = getRandomInt(2);
    ball_to_end -= 1;
    seq = ball;
    shapes = document.getElementsByClassName('shape');

    shapes[ball].style.display = 'Block';
    shapes[1 - ball].style.display = 'None';


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
        appearTimeout = setTimeout(makeShapeAppear, BetweenStimuliTime);
    else
        end();
}


// Keyboard Input Handle
document.addEventListener('keydown', function (event) {
    if (game_state == 'run') {
        if (event.keyCode == 37) {
            act_debounce(0);

        } else if (event.keyCode == 39) {
            act_debounce(1);
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

    shapes[ball].style.display = 'None';

    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;

    worst = Math.max(timeTaken, worst);
    best = Math.min(timeTaken, best);
    score += 1 / timeTaken;

    data.push({seq:seq, tries:this_ball_data}); //Save results
    this_ball_data = [];
    document.getElementById('timeTaken').innerHTML = timeTaken + 's';
    document.getElementById('timeBest').innerHTML = best + 's';
    document.getElementById('timeWorst').innerHTML = worst + 's';
    document.getElementById('score').innerHTML = Math.round(score, 2);

    appearAfterDelay();
}

function do_act(act) {
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    this_ball_data.push(timeTaken);
    if (ball == act) {
        endstimuli();
    }
}

var act_debounce = debounce(do_act, BetweenActTime, true);


function end() {
    var url_string = window.location.href;
    var url = new URL(url_string);

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
    xhttp.open("GET",
        "get.php?date=" + now +
        "&data=" + JSON.stringify(data) +
        "&id=" + url.searchParams.get("id") +
        // "&chat-id=" + url.searchParams.get("chat-id") +
        "&tg=" + TelegramGameProxy.initParams.tgShareScoreUrl,
        true);
    xhttp.send();

    highscore = Math.max(highscore, score);

    game_state = 'stop';
    init();

    // window.open("https://hband.ir/Neurogame/Game/get.php?time=" + data)
}

function init() {
    // container = document.getElementsByClassName('container')[0];
    // container.style.paddingTop = window.screen.availHeight * .1 + 'px';;
    document.getElementsByClassName('score')[0].innerText = Math.round(score, 2);
    document.getElementsByClassName('highscore')[0].innerText = Math.round(highscore, 2);

    if (game_state == 'run') {
        document.getElementById('overlay-end').style.display = 'none';
    } else {
        document.getElementById('overlay-end').style.display = 'block';
        document.getElementById('left-ball').style.display = 'none';
        document.getElementById('right-ball').style.display = 'none';
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
    now = new Date();
    start = now.getTime();
    init();
    makeShapeAppear();
}

init();
