// var myVideo = document.getElementsByClassName(".video-game");
// var button = document.querySelector(".video-play-button");
// function playpause() {
//     if(myVideo.paused) {
//         button.classList.add("display");
//     }
//     else  {
//         myVideo.play();
//     }
// }

var myVideo = document.getElementById("video");
var button = document.querySelector(".video-play-button");

function playPause() {
    if (myVideo.paused) {

        // removes the 'fa-pause' class from
        // the element:
        button.classList.remove('.none');
        console.log("YSPEX");

        // adds the 'fa-play' class to
        // the element:
    }
    else {
        myVideo.play();
        button.classList.add('.none');
    }
}


$('.video-game').on("play", function (e) {
    $(".video-play-button").fadeOut();
});

$('.video-game').on("pause", function (e) {
    $(".video-play-button").fadeIn();
});

$('.video-game').parent().click(function () {
    if($(this).children(".video-game").get(0).paused){
        $(this).children(".video-game").get(0).play();
    }  else{
        $(this).children(".video-game").get(0).pause();
    }
});