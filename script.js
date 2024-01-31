$(document).ready(function(){
  var w, h;
  getSize();
  var elem = $(".wrapper");

  $(window).resize(function(){
    getSize();
  });

  if (isTouchDevice()) {
    $('body').addClass('is_mobile');
    elem.css({
      transition: 'width 0.05s',
      marginLeft: 0,
    });
    window.ondevicemotion = function(e) {
      var rx = e.accelerationIncludingGravity.x;
      var prx = 100 - (0 - rx * 20);
      if (prx > 100) {prx = 100}
      // document.getElementById("accelerationX").innerHTML = Math.round(rx);
      updateWrapperByTilt(rx, prx);
    }
  }
  else {
    $(window).mousemove(function(e) {
      // console.log(e.pageX + ", " + e.pageY);
      updateWrapperByCursor(e.pageX);
    });
  }

  function isTouchDevice() {
      return 'ontouchstart' in document.documentElement;
  }

  function getSize(){
    w = $(window).width();
    h = $(window).height();
    // console.log(w + ": " + h);
  }

  function updateWrapperByCursor(x){
    px = x/w * 100;
    // console.log(px + "- " + py);
    elem.css('width', px + '%');
    // elem.show();
    if (x < 100) {
      elem.css('word-break',"break-all");
    }
    else {
      elem.css('word-break',"normal"); 
    }
  }

  function updateWrapperByTilt(rx, prx){
    elem = $(".wrapper");
    elem.css('width',prx + '%');
    // if (rx < -4) {
    //   elem.css('word-break',"break-all");
    //   elem.css('transition',"width 0");
    // }
    // else {
    //   elem.css('word-break',"normal"); 
    //   elem.css('transition',"width 0.2s");
    // }
  }
  
});
