let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "green" , "purple" , "pink" , "brown"]

let started = false ;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("Game Started");
        started = true ;

        levelUp () ;
    }
    
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout (function(){
        btn.classList.remove("flash");
    },50);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout (function(){
        btn.classList.remove("userFlash");
    },50);
}

function levelUp (){
    userSeq = [];
    level++ ;
    h2.innerText = `Level ${level}`;

    //random btn choose 
    let randInx = Math.floor(Math.random()*6);
    let randColor = btns[randInx];
    let randbtn = document.querySelector(`.${randColor}`)
    btnFlash(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
    
    
}

function checkAns(idx){
    //console.log("current level :",level);
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over!Your score was <b>${level} </b> . <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }

}

function btnPress(){
    console.log (this);
    console.log ("butten is pressed ");
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns ){
    btn.addEventListener("click" , btnPress );
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0 ; 

}

