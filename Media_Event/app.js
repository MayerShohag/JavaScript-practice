let video = document.querySelector("video");
video.addEventListener("canplay", function () {
    console.log("canplay");    
});
video.addEventListener("play", function () {
   console.log("play");
   
});
video.addEventListener("playing", function () {
    console.log("playing");
    
});
video.addEventListener("pause", function () {
    console.log("video is paused");
});
video.addEventListener("ended", function () {
    console.log("Thanks for watching");
});
video.addEventListener("volumechange", function () {
    console.log("volume changed");
});