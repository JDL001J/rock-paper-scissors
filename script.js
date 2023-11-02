const playerItem = document.querySelector(".player");
const comItem = document.querySelector(".com");
const winner = document.querySelector(".winner");
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
 const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

comScore = 0;
playerScore = 0;

// animations
function slideRight() {
    const element= document.getElementById("player");
    element.classList.remove("to-right");
    void element.offsetWidth; 
    element.classList.add("to-right")
}

function slideLeft() {
    const element= document.getElementById("com");
    element.classList.remove("to-left");
    void element.offsetWidth; 
    element.classList.add("to-left")
}

function fadeIn(){
    const element= document.getElementById("com");
    element.classList.remove("fade-in");
    void element.offsetWidth; 
    element.classList.add("fade-in")
}


// game play

function game(playerWeapon){
    comWeapon = randomChoice();
  comImage(comWeapon);
   getWinner(comWeapon,playerWeapon);

}

function comImage(item){
    if (item == 'rock'){
        comItem.src = './images/rock.svg'
    }
    else if(item == 'paper'){
        comItem.src = "./images/paper.svg"
    }
    else if (item == 'scissors'){
        comItem.src = './images/scissors.svg'
    }
}


function randomChoice(){
    arr = ['rock', 'paper', 'scissors'];
   item = arr[Math.floor(Math.random()*arr.length)];
  
 return item

}

function getWinner(comWeapon, playerWeapon){
    // ties
   
    if (comWeapon == playerWeapon)
    { winner.textContent = "tie game"}
// com win scenarios
    else if(comWeapon == 'scissors' && playerWeapon == 'paper'){
        comScore +=1
    }
    else if(comWeapon == 'rock' && playerWeapon == 'scissors'){
        comScore +=1
            }
    else if(comWeapon == 'paper' && playerWeapon == 'rock'){
        comScore +=1
                    }

    // player win scenarios
    else if(comWeapon == 'scissors' && playerWeapon == 'rock'){
        playerScore +=1
    }
    else if(comWeapon == 'rock' && playerWeapon == 'paper'){
        playerScore +=1
            }
    else if(comWeapon == 'paper' && playerWeapon == 'scissors'){
        playerScore +=1
                    }
    
   cScore.textContent = `Computer ${comScore}` ;
   pScore.textContent = `Player ${playerScore}` ;
}








// event listeners

rockBtn.addEventListener("click", function() {
    playerItem.src = './images/rock.svg';
    game('rock');playerItem.src = './images/rock.svg';}, )
rockBtn.addEventListener("click", slideRight,);
rockBtn.addEventListener("click", slideLeft,);


paperBtn.addEventListener("click", function() {
    playerItem.src = './images/paper.svg';game('paper');}, )
paperBtn.addEventListener("click", slideRight,);
paperBtn.addEventListener("click", slideLeft,);

scissorsBtn.addEventListener("click", function() {
    playerItem.src = './images/scissors.svg';game('scissors');playerItem.src = './images/scissors.svg';}, )
scissorsBtn.addEventListener("click", slideRight,);
scissorsBtn.addEventListener("click", slideLeft,);



