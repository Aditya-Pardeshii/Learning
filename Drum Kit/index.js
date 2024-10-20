var num = document.querySelectorAll(".drum").length;

for(var i=0;i<num;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // alert("i got");
    // var audio =new Audio("sounds/tom-1.mp3");
    // audio.play();

    var buttonpressed = this.innerHTML;
    MakeSound(buttonpressed);
    AddAnimation(buttonpressed);
});
}

document.addEventListener("keydown",function(event){
    MakeSound(event.key);
    AddAnimation(event.key);
    console.log(event);
});


function AddAnimation(key){
    var CurrButton = document.querySelector("."+key);
    CurrButton.classList.add("pressed");
    setTimeout(function(){
        CurrButton.classList.remove("pressed");
    },200);
}


function MakeSound(key){
    switch (key) {
        case "w":
            var audio =new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio =new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio =new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio =new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio =new Audio("sounds/snare.mp3");
            audio.play();
            break;    
        case "k":
            var audio =new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio =new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            break;
    }
}