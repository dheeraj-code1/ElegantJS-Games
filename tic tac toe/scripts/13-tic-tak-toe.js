let result="";
let score={
  wins1:0,
  wins2:0,
  tie:0
} 


let player1Chance=true;
let player2Chance=false;
let player1Move='';
let player2Move='';
let array=
[
  '','','',
  '','','',
  '','',''
];


function renderTheBoard()
{ 
  array.forEach((value,index)=>{
    const buttonElement=document.querySelector(`.js-button${index}`);
  if(value!=='' )
    { buttonElement.innerHTML= `<img src="${value}-emoji.png" class="move-icon">`;}   
    
})
}


function buttonHandle(buttonNumber){

  if(player1Move===''||player2Move===''){
    return
  }
  
  if(player1Chance){
    if(array[buttonNumber]===''){
      array[buttonNumber]=player1Move;
      player1Chance=false;
      player2Chance=true;}
      // playerTurn()

      renderTheBoard();
      checkWinner(player1Move,player2Move);
      
      

  }
  else if(player2Chance){
    if(array[buttonNumber]===''){
      array[buttonNumber]=player2Move;
      player2Chance=false;
      player1Chance=true;}
      // playerTurn()

    renderTheBoard()
    checkWinner(player1Move,player2Move);
    console.log(result)
    
  }
  playerTurn()  
} 

function checkWinner(player1Move, player2Move) {
  
  
  
  // check for player 1 win
  if (
    (array[0] === player1Move && array[1] === player1Move && array[2] === player1Move) ||
    (array[3] === player1Move && array[4] === player1Move && array[5] === player1Move) ||
    (array[6] === player1Move && array[7] === player1Move && array[8] === player1Move) ||
    (array[0] === player1Move && array[4] === player1Move && array[8] === player1Move) ||
    (array[2] === player1Move && array[4] === player1Move && array[6] === player1Move) ||
    (array[0] === player1Move && array[3] === player1Move && array[6] === player1Move) ||
    (array[1] === player1Move && array[4] === player1Move && array[7] === player1Move) ||
    (array[2] === player1Move && array[5] === player1Move && array[8] === player1Move)
    ) { console.log("kuch")
    result="Player 1 wins!";
    score.wins1++;
    
    
    
    
  }

  // check for player 2 win
  else if (
    (array[0] === player2Move && array[1] === player2Move && array[2] === player2Move) ||
    (array[3] === player2Move && array[4] === player2Move && array[5] === player2Move) ||
    (array[6] === player2Move && array[7] === player2Move && array[8] === player2Move) ||
    (array[0] === player2Move && array[4] === player2Move && array[8] === player2Move) ||
    (array[2] === player2Move && array[4] === player2Move && array[6] === player2Move) ||
    (array[0] === player2Move && array[3] === player2Move && array[6] === player2Move) ||
    (array[1] === player2Move && array[4] === player2Move && array[7] === player2Move) ||
    (array[2] === player2Move && array[5] === player2Move && array[8] === player2Move)
  ) {
    result="Player 2 wins!";
    score.wins2++;  
  }

  else if(fullBoardCheck()&&result===''){
    result='Tie Game'
    score.tie++;
  }

  if(result!==""){showResult(); setTimeout(()=>{resetBoard();
  },900);}
  
  
}

function resetBoard(){
  result="";
  array.forEach((value,index)=>{
    const buttonElement=document.querySelector(`.js-button${index}`);
  if(value!=='' )
  buttonElement.innerHTML= ''
     array[index]='';  
     
    })
}

function fullBoardCheck(){
  let count=0;
  array.forEach((value)=>{
    if (value==="X"|| value==="O"){
      count++;
    }
  })
  if(count===9){
    return true
  }
  else{return false}
  
}

function scoreUpadate(){
  const scoreElement=document.querySelector('.js-score');
  scoreElement.innerText=`Player1: ${score.wins1} Player2: ${score.wins2} Ties: ${score.tie}`;
  
  
}

function resetScore(){
  score.wins1=0;
  score.tie=0; 
  score.wins2=0;
  const scoreElement=document.querySelector('.js-score');
  scoreElement.innerText=`Player1: ${score.wins1} Player2: ${score.wins2} Ties: ${score.tie}`;
  
  
  
}
function showResult(){
const showResultElement=document.querySelector('.js-showResult')
showResultElement.innerHTML=`${result}`
scoreUpadate()
}

function showIcon(){
  const showIconElement=document.querySelector('.js-showIcon')
showIconElement.innerHTML=`
Player 1<img class="move1"src="${player1Move}-emoji.png">  <img class="move1"src="${player2Move}-emoji.png"> Player 2`
}


function resetGame(){
  player1Move=""
  player2Move=""
  player1Chance=true
  player2Chance=false
  resetBoard()
  resetScore()
  document.querySelector('.js-showIcon').innerHTML=`Choose any move player 1:

  <button onclick="player1Move='X';player2Move='O';showIcon();playerTurn()" class="js-move-x move"><img class="move1"src="X-emoji.png"></button>
  <button onclick="player2Move='X';player1Move='O'; showIcon(); playerTurn()" class="js-move-o move"><img class="move1" src="O-emoji.png"></button>`
  
  playerTurn()
  document.querySelector('.js-PlayerTurn').innerHTML=""

const showResultElement=document.querySelector('.js-showResult')
showResultElement.innerHTML=``
}

  function playerTurn(){
    if(player1Chance){
      document.querySelector('.js-PlayerTurn').innerHTML="Player 1 turn's..."
    }
    else if(!player1Chance){
      document.querySelector('.js-PlayerTurn').innerHTML="Player 2 turn's..."
  
    }
  
  }