var seqGen = {
    state: 1,
    nextState : function(p_alt) {
        control = Math.random();
        if(control < p_alt){
            this.state =  Math.abs(1-this.state);
        }
        else{
            this.state = this.state;
        }
        return this.state;
    }
};


var seqGen1 = {
    state: 1,
    nextState : function(p_11, p_00) {
        control = Math.random();
        if(this.state == 1){
        	if(control > p_11){ this.state = 0;}
        }
        else{
        	if(this.state == 0){
            	if(control > p_00){ this.state = 1; }
        	}
        }
        return this.state;
    }
};

var seqGen2 = {
    state: 11,
    nextState : function(p_00_1, p_01_1, p_11_1, p_10_1) {
        control = Math.random();
        if(this.state == 00){
        	if(control < p_00_1){ this.state = 01;}
            if(control > p_00_1){ this.state = 00;}

        }
        if(this.state == 01){
            if(control < p_01_1){ this.state = 11;}
            if(control > p_01_1){ this.state = 10;}
        }
        if(this.state == 11){
            if(control < p_11_1){ this.state = 11;}
            if(control > p_01_1){ this.state = 10;} 
        }
        if(this.state == 10){
            if(control < p_10_1){ this.state = 01;}
            if(control > p_01_1){ this.state = 10;}
        }
        return this.state%10;
    }
};

var i = 0;

while(i<20){
	document.write(seqGen.nextState(0.2));
    i = i + 1;
}

document.write('<br>');
var i = 0;
while(i<20){
	document.write(seqGen1.nextState(0.9, 0.2));
    i = i + 1;
}

document.write('<br>')
var i = 0;
while(i<20){
	document.write(seqGen2.nextState(0.9, 0.2, 0.4, 0.5));
    i = i + 1;
}









