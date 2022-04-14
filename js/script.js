'use strict'


let control =1

const player1= document.getElementById('left')
const player2= document.getElementById('right')

const diceImage = document.getElementById('dice-img')

const score1 = document.getElementById('player-1-score')
const score2 = document.getElementById('player-2-score')

const winner = document.getElementById('winner')

let player1Score=0
let player2Score=0
let player1CurrentScore=0
let player2CurrentScore=0
let lock =0 

const currentScore1 = document.getElementById('current-1')
const currentScore2 = document.getElementById('current-2')

const roll =document.getElementById('generate')
const newGame =document.getElementById('default')
const hold =document.getElementById('add')





if(lock === 0){
    console.log(lock)
    diceImage.style.display='fixed'
    roll.addEventListener('click',()=>{
        const dice = Math.floor(Math.random()*6)+1
       
        
        diceImage.src=`../image/dice${dice}.png`
        
        
        if(dice === 1 ){
            if(control === 1){
                control =2
                player2CurrentScore=0
                
            }
            else{
                control =1
                player1CurrentScore=0
               
            }
    
        }
        else{
            if(control === 1){
                player2Score+=player2CurrentScore
                console.log(player2Score)
                score2.textContent = player2Score
                
                player1CurrentScore+=dice
                currentScore1.textContent=player1CurrentScore
                player1.style.background="rgb(255, 206, 206)"
                player2.style.background="rgb(252, 221, 221)"
    
    
            }
            else if(control === 2){
                player1Score+=player1CurrentScore
                score1.textContent = player1Score
                console.log(player1Score)
                
                player2CurrentScore+=dice
                currentScore2.textContent=player2CurrentScore
                player2.style.background="rgb(255, 206, 206)"
                player1.style.background="rgb(252, 221, 221)"
    
            }
    
        }
        if(player1Score >= 50 ){
            lock =1
            winner.textContent="Player 1 Wins !!!"
            console.log("end")
            diceImage.style.display='none'
        
        
        }
        else if(player2Score >=50){
            lock =1
        
            winner.textContent="Player 2 Wins !!!"
            console.log("end")
            diceImage.style.display='none'
        }
            
            
    
        
        
    
    })

    hold.addEventListener('click',()=>{
        console.log("hold")
        if(control===1){
            console.log("hold-1")
            player1Score += player1CurrentScore
            score1.textContent = player1Score
            player2CurrentScore=0
            control =2 
    
        }
        else if(control === 2){
            player2Score += player2CurrentScore
            score2.textContent = player2Score
            player2CurrentScore=0
            control = 1
    
        }
        if(player1Score >= 50 ){
            lock =1
            winner.textContent="Player 1 Wins !!!"
            console.log("end")
        
        
        }
        else if(player1Score >=50){
            lock =1
        
            winner.textContent="Player 2 Wins !!!"
            console.log("end")
        }
        
        
    })
    
    

}


newGame.addEventListener('click',()=>{
    
    window.location.reload();

})




