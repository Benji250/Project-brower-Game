const boy = document.getElementById("boy");
const enemy = document.getElementById("enemy");
const score = document.getElementById("score");
let currentScore = 0;

function jump() {
    if (boy.classList !="jump");{
        boy.classList.add("jump");

        setTimeout(function (){
            boy.classList.remove("jump");
        }, 300);
    }
}
let alive = setInterval(function(){
    
    let boyTop = parseInt(window.getComputedStyle(boy).getPropertyValue("top"));

    let enemyLeft = parseInt(
        window.getComputedStyle(enemy).getPropertyValue("left")
    );
    
    if (enemyLeft < 50 && enemyLeft > 0 && boyTop >= 390){
       currentScore = 0 
       alert("YOU DIED !!");
    }
    if (enemyLeft < 14){
       currentScore++
       score.innerText = currentScore

    }
}, 10);

document.addEventListener("keydown", function(event){
    jump();
    console.log("jump")
});