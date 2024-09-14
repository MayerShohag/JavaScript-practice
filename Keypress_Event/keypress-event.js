// keypress event section start from here 
document.addEventListener("keypress", function (event) {
    let text = event.key;
    playAudio(text);
});

function playAudio(text) {
    let audio = new Audio("keypress.mp3");
    switch (text) {
        case "a":
            audio.play();
            break;
        case "b":
            audio.play();
            break;
        case "c":
            audio.play();
            break;
        case "d":
            audio.play();
            break;
        case "e":
            audio.play();
            break;

        default:
            break;
    }
}

// keypress event section ends here
