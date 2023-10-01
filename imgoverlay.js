function openFullscreen(image) {
  var fullscreenOverlay = document.getElementById("fullscreenOverlay");
  var fullscreenImage = document.getElementById("fullscreenImage");

  fullscreenImage.src = image.src;
  fullscreenOverlay.style.display = "block";

  /*if (fullscreenImage.requestFullscreen) {
    fullscreenImage.requestFullscreen();
  } else if (fullscreenImage.mozRequestFullScreen) {
    fullscreenImage.mozRequestFullScreen();
  } else if (fullscreenImage.webkitRequestFullscreen) {
    fullscreenImage.webkitRequestFullscreen();
  }*/
}

function closeFullscreen() {
  var fullscreenOverlay = document.getElementById("fullscreenOverlay");
  var fullscreenImage = document.getElementById("fullscreenImage");

  /*if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }*/

  fullscreenOverlay.style.display = "none";
}
