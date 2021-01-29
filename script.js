//call the element
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    //make an animation -> change the top position of hole
   //randomly come at different heights 
    var random = -((Math.random() * 300) +150);
    //to get a range -150 until -450 
    hole.style.top = random + "px"; 
    counter++;
});

//to set interval funct
setInterval(function(){
    //calls a function or evaluates an expression at specified intervals (in milliseconds).
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    //to get a value number -> convert with parseInt
    if(jumping == 0){
        character.style.top = (characterTop + 3)+"px";
    }
    var blockForLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //getPropertyValue
    // method is used to return the value of the CSS property declared in the declaration block.
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    //without use px
    var charTop = -(500 - characterTop);
    if((characterTop > 480)||((blockForLeft < 20)&&(blockForLeft > -50)&&((charTop < holeTop)||(charTop > holeTop + 130)))){
        alert("Game over! Score: "+(counter - 1));
        character.style.top = 100 + "px";
        counter = 0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        //use it into jump interval
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop > 6) && (jumpCount < 15)){
            character.style.top = (characterTop - 5)+"px";
        }
        if(jumpCount > 20){
            clearInterval(jumpInterval);
            // method clears a timer set with the setInterval() method.
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    },10);
}
