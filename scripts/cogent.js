document.addEventListener("DOMContentLoaded",init,false);

function init() {
  addjsclass();
//  createClosedElementsArray();
//  addListenerToWindow();
  if (document.getElementById('carousel-js')) {
    carousel();
  }
}

// if javascript is present, replaces class 'no-js' on body with class 'js'
// if this happens, mobile width menu displays permanently
function addjsclass() {
  document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace(/(\s)no-js/," js");
}


//--->>> CAROUSEL <<<---//

function carousel() {
  var imagesArray = [];

  function getElementsByClassName(searchClass) {
      imagesArray = (Array.prototype.slice.call( document.getElementsByClassName(searchClass) )); // converts HTMLCollection to array
      imagesArray[(imagesArray.length-2)].className += (" start");
  }

  //use counter to create active and next classes on images in turn, and put active class on
  var activeImage;
  var nextImage;
  var counter;

  function appendActiveClass() {
    counter = (imagesArray.length-1);
    var intervalTime = 5000;
    var changeClassSpeed = setInterval(changeActiveClass, intervalTime);
    function changeActiveClass() {
      for (var i=0, maxi=imagesArray.length; i<maxi; i++) {
        imagesArray[i].className = imagesArray[i].className.replace(/(\s)active/,"");
        imagesArray[i].className = imagesArray[i].className.replace(/(\s)next/,"");
        activeImage = imagesArray[(counter-1)%(imagesArray.length)];
        nextImage = imagesArray[(counter)%(imagesArray.length)];
      }

      counter ++;
      activeImage.className += (" active");
      nextImage.className += (" next");
      imagesArray[(imagesArray.length)-2].className = imagesArray[(imagesArray.length)-2].className.replace(/(\s)start/,"");

    function getSupportedTransform() {
        var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
        for(var i = 0; i < prefixes.length; i++) {
        if(document.createElement('div').style[prefixes[i]] !== undefined) {
          return prefixes[i];
        }
      }
      return false;
    }
    if (getSupportedTransform() === false) { //use !== false to test supported browser, otherwise ===
      fade(activeImage,nextImage);
      }
    }
  }

  function fade(activeImage,nextImage) {
    var activeop = 1;
    var nextop = 0.01;

    for (var i=0; i<imagesArray.length; i++) {
      if ((imagesArray[i] == (activeImage)) || (imagesArray[i] == (nextImage))) {
        imagesArray[i].style.display = 'block';
      }
      if ((imagesArray[i] !== (activeImage)) && (imagesArray[i] !== (nextImage))) {
        imagesArray[i].style.display = 'none';
        imagesArray[i].style.opacity = 0;
    }
  }
  
    var timer = setInterval(function () {
      if (activeop <= 0.001) {
        activeImage.style.display = 'none';
        clearInterval(timer);
      }
      activeImage.style.opacity = activeop;

      activeop -= activeop * 0.15;
      if (nextop > 0.978) {
        clearInterval(timer);
      }
      nextImage.style.opacity = nextop;
      nextop += 0.0313;
    }, 30);
  }

  getElementsByClassName("carousel__slide");
  appendActiveClass();

}