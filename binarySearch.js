import readlineSync from 'readline-sync';
var userGuess;
var randomNumber;
var keepGoing;
while(true){
    keepGoing=readlineSync.question("You want to play? ");
    if(keepGoing!= 'y'){
        break;
    }
    else{
        randomNumber=Math.ceil(Math.random()*100);
        var i=0;
        console.log("Your guesses are limited to 5");
        for(i=0; i<5 ;i++){
            
            userGuess=readlineSync.question('What do you thing it is? ');
            if(randomNumber<userGuess){
                console.log("too High!");
            }
            else if(randomNumber>userGuess){
                console.log("too low!");

            }
            else{
                console.log("bingo!");
                break;
            }
        }
        if(i==5){
            console.log('you loser!');
        }
    }
}