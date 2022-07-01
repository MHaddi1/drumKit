var len = document.querySelectorAll(".drum").length;

for (var i = 0; i < len; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttunInnerHTML = this.innerHTML; // this.innerHTML take the all buttun save into the variable.

        makingSound(buttunInnerHTML);
        buttonAnimation(buttunInnerHTML);
        

    })

}


document.addEventListener("keypress", function (event) {
    //event keyword display the Property of the keys and event.key keyword is used to display Which key word you press. 

    makingSound(event.key);//combine these two make the full functional website keypress music and etc.

    console.log(event) // display the property of the keys.

    console.log(event.key); //display the key.
    
    buttonAnimation(event.key);
})

function makingSound(key) {
    //detect the keys.

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(innerHTML);
            break;
    }
}



function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }