const submitbtn=document.getElementById('submit-btn')
const ROCK='ROCK'
const PAPER='PAPER'
const SCISSORS='SCISSORS'
const DEFAULT='ROCK'
const DRAW='DRAW'
const PLAYER_WINS='PLAYER_WINS'
const COMPUTER_WINS='COMPUTER_WINS'
let isgameRunning=false

const playerchoice=()=>{
    const selection=prompt(`Choose from Rock,Paper or Scissors`).toUpperCase()
    if(selection!==ROCK && selection!==PAPER && selection!==SCISSORS){
        alert(`Invalid selection type.We choose ${DEFAULT} for you`)
        return DEFAULT
    }
    return selection

}

const computerchoice=()=>{
    const randomValue=Math.random()
    if(randomValue<0.37){
        return ROCK
    }
    else if(randomValue<0.67){
        return PAPER
    }
    else{
        return SCISSORS
    }
}

const getWinner=(playerchoice,computerchoice)=>{
    if(computerchoice===playerchoice){
        return DRAW
    }
    else if(computerchoice===ROCK&&playerchoice===PAPER||computerchoice===PAPER&&playerchoice===SCISSORS||computerchoice===SCISSORS&&playerchoice===ROCK)
    {
        return PLAYER_WINS
    }
    else{
        return COMPUTER_WINS
    }
}

submitbtn.addEventListener('click',()=>{
    isgameRunning=true
    if(isgameRunning){
        
    console.log('Game is Running')
    }
    const player=playerchoice()
    console.log(player)
    const computer=computerchoice()
    console.log(computer)
    const winner=getWinner(player,computer)
    console.log(winner)
    let message=`You picked ${player} and computer picked ${computer} `
    if(winner===DRAW){
        message=message+':YOU HAVE A DRAW'
    }
    else if(winner===PLAYER_WINS){
        message=message+':YOU WIN'
    }
    else{
        message=message+':YOU LOSE'
    }
    alert(message)
    isgameRunning=false
})