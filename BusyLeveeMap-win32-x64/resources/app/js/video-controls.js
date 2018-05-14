// ---------------- [ BEGIN ] Custom Video Controls ------------------ //
window.onload = function () {

    // ------------- Video 01 UI ---------- //
    // Video
    var video01 = document.getElementById("stlouisVideo");

    // Buttons
    var playBTN01 = document.getElementById("play-pause-01");

    // Sliders
    var seekBar01 = document.getElementById("seekBar01");


    //var volumeBar = document.getElementById("volume-bar-01");

    // Event listener for the play/pause button 01
    playBTN01.addEventListener("click", function () {
        if (video01.paused == true) {
            // Play the video
            video01.play();

            // Update the button text to 'Pause'
            playBTN01.innerHTML = "<img src='./img/BTN/Video-Control-BTN-Pause.png'>";
        } else {
            // Pause the video
            video01.pause();

            // Update the button text to 'Play'
            playBTN01.innerHTML = "<img src='./img/BTN/Video-Control-BTN-Play.png'>";
        }
    });

    // Event listener for the seek bar
    video01.ontimeupdate = function () {
        var percentage = (video01.currentTime / video01.duration) * 100;
        $("#seekBar01 span").css("width", percentage + "%");
    };
}