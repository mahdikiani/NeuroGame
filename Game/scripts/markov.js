function getIndex(state) {
    var res = 0;
    for (var i = 0; i < state.length; i++) {
        res += state[state.length - i - 1] * 2 ** i;
    }
    return res;
}

function getNewState(oldState, newData) {
    oldState.shift();
    oldState.push(newData);
    return oldState;
}

function getNewData(pArray, newP) {
    var cum = 0;
    for (var i = 0; i < pArray.length; i++) {
        cum += pArray[i];
        if (newP < cum)
            break;
    }
    return i;
}

var seqGen = {
    init: function () {
        var params = Array.prototype.slice.call(arguments, this.init.length);
        switch (params.length) {
            case 1:
                this.type = 'Alternation';
                this.state = [1];
                p_alt = params[0];
                this.change_mat = [
                    [1 - p_alt, p_alt],
                    [p_alt, 1 - p_alt]
                ];
                break;
            case 2:
                this.type = 'Meiniel';
                this.state = [1];
                p_alt = params[0];
                this.change_mat = [
                    [params[0], 1 - params[0]],
                    [1 - params[1], params[1]]
                ];
                break;
            case 4:
                this.type = '2 state';
                this.state = [1, 1];
                this.change_mat = [
                    [1 - params[0], params[0]],
                    [1 - params[1], params[1]],
                    [1 - params[2], params[2]],
                    [1 - params[3], params[3]],
                ];
                break;
            default:
                this.type = 'Bad number of inputs';
                this.state = [1];
                p_alt = 0.5;
                this.change_mat = [
                    [1 - p_alt, p_alt],
                    [p_alt, 1 - p_alt]
                ];
                break;
        }
        return this;
    },
    nextState: function () {
        control = Math.random();
        mat_id = getIndex(this.state);
        newData = getNewData(this.change_mat[mat_id], control);
        this.state = getNewState(this.state, newData);
        return newData;
    },
};


var seqGen1 = {
    state: 1,
    nextState: function (p_11, p_00) {
        control = Math.random();
        if (this.state == 1) {
            if (control > p_11) {
                this.state = 0;
            }
        } else {
            if (this.state == 0) {
                if (control > p_00) {
                    this.state = 1;
                }
            }
        }
        return this.state;
    }
};

var seqGen2 = {
    state: 11,
    nextState: function (p_00_1, p_01_1, p_11_1, p_10_1) {
        control = Math.random();
        if (this.state == 00) {
            if (control < p_00_1) {
                this.state = 01;
            }
            if (control > p_00_1) {
                this.state = 00;
            }

        }
        if (this.state == 01) {
            if (control < p_01_1) {
                this.state = 11;
            }
            if (control > p_01_1) {
                this.state = 10;
            }
        }
        if (this.state == 11) {
            if (control < p_11_1) {
                this.state = 11;
            }
            if (control > p_01_1) {
                this.state = 10;
            }
        }
        if (this.state == 10) {
            if (control < p_10_1) {
                this.state = 01;
            }
            if (control > p_01_1) {
                this.state = 10;
            }
        }
        return this.state % 10;
    }
};

// var i = 0;

// while (i < 20) {
//     document.write(seqGen.nextState(0.2));
//     i = i + 1;
// }

// document.write('<br>');
// var i = 0;
// while (i < 20) {
//     document.write(seqGen1.nextState(0.9, 0.2));
//     i = i + 1;
// }

// document.write('<br>')
// var i = 0;
// while (i < 20) {
//     document.write(seqGen2.nextState(0.9, 0.2, 0.4, 0.5));
//     i = i + 1;
// }