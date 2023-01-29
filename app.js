let score = document.querySelector('.score');
let gameScreeen = document.querySelector('.gameScreen');
let startScreen=document.querySelector('.startScreen');
 


startScreen.addEventListener('click',
startGame);

document.addEventListener('keydown',
keyPressed);
document.addEventListener('keyup',
keyReleased);


let controls = {
    Arrowup:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false,

}
function keyPressed (event){
    event.preventDefault();
    console.log("key pressed" ,event.key)
    keys[event.key] = true
    console.log(keys)
}
function keyReleased(event){

    event.preventDefault();
    console.log("key released",event.key)
    keys[event.key]=false
    console.log(keys)
}
function keyPressed(e){
    console.log("Pressed",e.key);
   // if( )
    console[e.key]=true;
    console.log (controls)
}

function keyReleased(e){
    console.log("Released",e.key);
    console[e.key]=false;
}

function startGame(){
    console.log("Clicked")
    //addor remove a calss from certain element
    //conslole.log(startScreen.classList)
    startScreen.classList.add('hide');
    gameScreeen.classList.remove('hide' );
}



document.addEventListener('DOMContentLoaded', function() {


    document.addEventListener('keydown', function(e) {
        if (e.key == 'ArrowLeft') {
            MoveLeft()
        }
        if (e.key == 'ArrowRight') {
            MoveRight()
        }
    })

    function MoveLeft() {
        hero = document.querySelector('#hero')
        leftPos = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
        leftPos -= 100;
        if (leftPos >= 0) {
            console.log(hero)
            hero.style.left = leftPos + 'px';
        }

    }



    function MoveRight() {
        hero = document.querySelector('#hero')
        rightPos = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
        rightPos += 100;
        if (rightPos < 300) {

            hero.style.left = rightPos + 'px';
        }

    }
    road = document.querySelector('#road')
    villian = document.querySelector('#villian')
    document.addEventListener('animationiteration', function() {
        randomNumber = Math.floor(Math.random() * 3) * 100
        villian.style.left = randomNumber + 'px';
    })
    
    score = 0;
    checkDead = setInterval(function() {
        score++
        heroLeft = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
        villianLeft = parseInt(window.getComputedStyle(villian).getPropertyValue('left'))
        villiantop = parseInt(window.getComputedStyle(villian).getPropertyValue('top'))
        document.querySelector('#score').innerHTML = 'Score: ' + score
        if (heroLeft == villianLeft && villiantop >= 400) {
            alert('game over! You Score Is ' + score)
            villian.style.animation = 'none';
            road.style.animation = 'none';
            villian.style.top = villiantop + 'px'
            console.log(villiantop)
            clearTimeout(checkDead)
        }
    }, 100)



})
