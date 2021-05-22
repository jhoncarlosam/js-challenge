var rock = "rock";
var paper = "paper";
var scissors = "scissors";

function game(me, cpu) {
    if(me.paper === cpu.scissors){
        console.log('loser')
    }else if(me === paper && cpu === rock){
        console.log('winner')// END PAPER
    }else if(me === rock && cpu === paper){
        console.log('losser')
    }else if(me === rock && cpu === scissors){
        console.log('winner')// END ROCK
    }else if(me === scissors && cpu === rock){
        console.log('losser')
    }else if(me === scissors && cpu === paper){
        console.log('winner')// END SCISSORS
    }else if(me === cpu){
        console.log('tie')
    }
}
game(rock, paper)