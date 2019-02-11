import readlineSync from 'readline-sync';

for(var i=0; i<5; i++){

    var temperature = readlineSync.question("Inter temperatute in degrees centigrade ");
    if(temperature<0){
        console.log("marine is hard");
    }
    else if(temperature<100){
        console.log("marine is wet");
    }
    else{
        console.log("marine is steamy");
    }
}
console.log("end of the game");