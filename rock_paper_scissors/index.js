//get results

function results() {
    if(computerChoice === userChoice) {
        return result = 'Its a tie';
    } else if (computerChoice === 'rock' && userchoice === 'paper') {
        return result = 'you lost'; 
    } else if (computerChoice === 'rock' && useerChoice === 'scissors') {
        return result = 'you win!';
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        return result = 'you win!';
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        return result = 'you lost';
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        return result = 'you win!';
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        return result = 'you lost';
    }
}

