window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open(type) {
  $("#hiddenType").val(type);
  //var lightBoxVideo = document.getElementById("video");
  window.scrollTo(0, 0);
  //document.getElementById('light').style.display = 'block';
  //document.getElementById('fade').style.display = 'block';
  //lightBoxVideo.play();
 $('#light').css({"display":"block"});
 $('#fade').css({"display":"block"});
  startWebcam();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("video");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}