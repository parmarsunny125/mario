score = 0;
cross = true;

// audio = new Audio('music.mp3');
// audiogo = new Audio('gameover.mp3');
// setTimeout(() => {
//     audio.play()
// }, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    reset=document.getElementById('reset')
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 290) {
        
        // var timer=document.querySelectorAll('.number')
        // for(j=0;j<=4;j++){
        //     timer[j].style.animation="none"; 
        // }

        gameOver.innerHTML = "Game Over - Reload to Play Again"
        // obstacle.classList.remove('obstacleAni')
        obstacle.style.animation="none"
        // document.getElementById('aniani1').classList.remove('aniani1')
       
        reset.style.opacity=1;

        // audiogo.play();
        // setTimeout(() => {
        //     audiogo.pause();
        //     audio.pause();
        // }, 1000);
    }
    
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }
    

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}

const go=()=>{

// let container = document.querySelectorAll('.number');
// let i = 0;

// function someFunc()
// {
//     if (i === container.length)
//         clearInterval(interval);

//     // console.log(container[i++]);
//     container[i].style.animation="animate 10s linear";
//     i++;

// }

// let interval = setInterval(someFunc, 1000)
      
    
    

 

//     setInterval(() => {
    
//     const timer=document.querySelectorAll('.number')
//     let i=0
//     function increase(){
//         i++;
//         timer[i].style.animation="animate 10s linear";
       


//     }
//     increase()
    
  
// },1000)

start=document.getElementById('start')
start.style.opacity=0;
let i=0
var timer=document.querySelectorAll('.aniani')
function count(){
   
    console.log(i)

    
   
    
    if (i === timer.length){
            clearInterval(interval);
            obstacle.style.animation="obstacleAni 5s linear infinite";
            document.getElementById('countdown').classList.remove("aniani")

    }
    console.log(timer[i]);
    timer[i].style.animation="animate 1s linear"; 
    i++;
    
}
interval=setInterval(count,1000)
obstacle=document.querySelector('.obstacle')
// obstacle.style.animationDelay="4s";




   
// for(let i=0;i=timer.length;i++){
//     timer[i].style.animation="none";

// let j=0
}
function playAgain(){
    //  var timer=document.querySelectorAll('.number')

    // console.log("playAgain")
    
    
    
    
//    let go1=document.querySelector('.contain')
//     console.log(go1)
// //    document.querySelector('#aniani1').id=""
// //    document.querySelector('.aniani').id="aniani1"
     
//      go1.style.animation="animate 1s linear";
score=0

gameOver.innerHTML = "LETS GO"
reset.style.opacity=0
obstacle=document.querySelector('.obstacle')
obstacle.style.animation="obstacleAni 5s linear infinite";

}

