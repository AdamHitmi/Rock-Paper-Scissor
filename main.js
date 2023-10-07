

let computerMove = '';

let score = JSON.parse(localStorage.getItem('score')) || {
    Wins:0,
    Losses:0,
    Ties:0
};

updateScoreElem();


function playGame(playerMove){
    const computerMove = pickComputerMove();

let result = '';

if(playerMove === 'Scissor'){
    if(computerMove === 'Rock'){
        result = 'You Lose.';
    }
    else if(computerMove === 'Paper'){
        result = 'You Win.';
    }
    else if(computerMove === 'Scissor'){
        result = 'Tie.';
    }

}

if(playerMove === 'Paper'){

  if(computerMove === 'Rock'){
        result = 'You Win.';
    }
    else if(computerMove === 'Paper'){
        result = 'Tie.';
    }
    else if(computerMove === 'Scissor'){
        result = 'You Lose.';
    }
}

if(playerMove === 'Rock'){
    if(computerMove === 'Rock'){
        result = 'Tie.';
    }
    else if(computerMove === 'Paper'){
        result = 'You Lose.';
    }
    else if(computerMove === 'Scissor'){
        result = 'You Win.';
    }
}
 

if(result === 'You Win.'){
    score.Wins += 1;
}
else if(result === 'You Lose.'){
    score.Losses += 1;
}
else if(result === 'Tie.'){
    score.Ties += 1;
}


localStorage.setItem('score',JSON.stringify(score));

updateScoreElem();

document.querySelector('.result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
}

function updateScoreElem(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function pickComputerMove(){
    let randomNumber = Math.random();

if(randomNumber >= 2/3 && randomNumber < 1){
computerMove = 'Scissor';
}
else if(randomNumber >= 0 && randomNumber < 1/3){
computerMove = 'Rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove = 'Paper';
}

return computerMove;
}
function subscribe(){
    const buttonElem = document.querySelector('.subscribe-btn');
  if(buttonElem.innerText === 'Subscribe'){
    buttonElem.innerHTML = 'Subscribed';
  }else{
    buttonElem.innerHTML = 'Subscribe';
  }
}
function calculateTotal(){
    const inputElem = document.querySelector('.cost-input');
    let cost = Number(inputElem.value);

    if(cost < 40){
       cost = cost + 10;
    }
    
    document.querySelector('.total-cost').innerHTML = `$${cost}`;
}

function submit(){
    const inputElem = document.querySelector('.input-name');
    let name = inputElem.value;
    document.querySelector('.yourName').innerHTML = `Your Name is : ${name}`; 
}

function resetName(){
    const inputElem = document.querySelector('.input-name');
    let name = inputElem.value;
    document.querySelector('.yourName').innerHTML = ''; 
    inputElem.value = '';
}




