'use strict';

let random = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;
function displayMessage(message){
     document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click',function(){
     const guess = Number(document.querySelector('.guess').value);
     if (score>0){
          if(!guess){
               displayMessage('No Numberโ');
          }
          else if(guess === random){
               displayMessage('Congrats! you guessed it right.๐');
               document.querySelector('.score').textContent = score;
               if(score>highscore){
                    document.querySelector('.highscore').textContent = score;
                    highscore = score;
               }
               document.querySelector('.number').textContent = random;
               document.querySelector('body').style.backgroundColor = '#60b347';
               document.querySelector('.number').style.width = '30rem';
               
          }
          else if( guess !== random){

               displayMessage(guess < random? 'too low๐' : 'too high!๐');
               score --;
               document.querySelector('.score').textContent = score;
          }
          else{
               displayMessage('seems like an invalid entry!๐');
          }
          
     }
     else{
           displayMessage('You lost the game๐');
          return;
     }
     })

     document.querySelector('.again').addEventListener('click',function(){
          document.querySelector('.number').textContent = '?';
          random = Math.trunc(Math.random()*20) + 1;
          displayMessage('Start guessing...');
          score = 20;
          document.querySelector('.score').textContent = 20;
          document.querySelector('.guess').value = null;
          document.querySelector('body').style.backgroundColor = '#222';
          document.querySelector('.number').style.width = '15rem';

     })