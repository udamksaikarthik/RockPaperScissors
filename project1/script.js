//challenge 3--rock,paper,scissors
function game(userValue) {
    //get userChoice
    let userChoice = userValue.id;
    console.log(userChoice);
    //get botChoice
    let botChoice = computerChoice(randomChoice());
    console.log(botChoice);
    //checking scores of user and bot
    let scores = CheckScore(userChoice, botChoice);
    console.log(scores);
    //check whose score is big
    let winner = Winner(scores);
    console.log(winner);
    //show message
    return final(userChoice, botChoice, winner);
}

//bot-random-choice
function randomChoice() {
    return Math.floor(Math.random() * 3);
}
//computerChoice function
function computerChoice(randomVal) {
    return ['rock', 'paper', 'scissor'][randomVal];
}
//CheckWinner function
function CheckScore(userVal, botVal) {
    let rpsDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissor': 0, 'rock': 1, 'paper': 0.5 },
        'scissor': { 'scissor': 0.5, 'rock': 0, 'paper': 1 }
    };
    let userScore = rpsDatabase[userVal][botVal];
    let botScore = rpsDatabase[botVal][userVal];
    return [userScore, botScore];
}

// Winner function

function Winner(scores) {
    let message;
    if (scores[0] === 1) {
        message = ['you Won', 'green'];
    } else if (scores[0] === 0.5) {
        message = ['you Tied', 'yellow'];
    } else {
        message = ['you Lost', 'red'];
    }
    return message;
}

function final(userChoice, botChoice, message) {
    let RPSdb = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let userDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    userDiv.innerHTML = '<img style="box-shadow: 0px 10px 50px blue" src="' + RPSdb[userChoice] + '" width=150 height=150>'
    botDiv.innerHTML = '<img style="box-shadow: 0px 10px 50px red" src="' + RPSdb[botChoice] + '" width=150 height=150>'
    messageDiv.innerHTML = '<h2 style="background-color:' + message[1] + '">' + message[0] + '</h2>'

    document.getElementById('imga').appendChild(userDiv);
    document.getElementById('imga').appendChild(messageDiv);
    document.getElementById('imga').appendChild(botDiv);
}