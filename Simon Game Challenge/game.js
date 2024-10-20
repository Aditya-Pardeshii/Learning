
var ButtonColor = ['red','blue','green','yellow'];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        NextSequence();
        started=true;
    }
});
$('.btn').on("click",function(){
    var userChosenColor = this.id;
    
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    PlaySound(userChosenColor);
    AnimatePress(userChosenColor);
    CheckAnswer(userClickedPattern.length-1);
})


function NextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    var RandomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = ButtonColor[RandomNumber];
    gamePattern.push(randomChosenColour);
    $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    PlaySound(randomChosenColour);
   
}

function PlaySound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function AnimatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
    },100);
}

function CheckAnswer(CurrentLevel){
    if (gamePattern[CurrentLevel] === userClickedPattern[CurrentLevel]){
        console.log("Success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                NextSequence();
            },1000);
        }
    }
    else{
        PlaySound("wrong");
        $("body").addClass("game-over");
        $('level-title').text('Game Over Press any button to try again');
        setTimeout(function(){
            $('body').removeClass('game-over');
        },200);
        console.log("Wrong");
        StartOver();
    }
}

function StartOver(){
    setTimeout(function(){
    level = 0;
    gamePattern = [];
    started = false;
    $("#level-title").text("Press A Key to Start"); 
    }, 3000);
}