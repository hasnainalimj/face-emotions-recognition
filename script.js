const video = document.getElementById("video");

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => (video.srcObject = stream),
    error => console.log("error while starting video", error)
  );
}

startVideo();
