document.addEventListener("DOMContentLoaded",init,false);

function init() {
  addjsclass();
  addListenerToWindow();
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


//--->>>   MENU   <<<---//

// adds event listener to window so it can toggle mobile menu, and can close menu when clicked elsewhere
function addListenerToWindow() {
  if (window.addEventListener) {
    window.addEventListener('click', toggleMenu, false);
  } else if (window.attachEvent) {
    window.attachEvent('onclick', toggleMenu);
  }
}

var closedClass = new RegExp("(^|\\s)closed(\\s|$)");
var openClass = new RegExp("(^|\\s)open(\\s|$)");
var menuIcon = document.getElementById('menu-link--mobile-js');
var primaryMenu = document.getElementById('menu-prim__list-js');
var menuContentsArray = primaryMenu.getElementsByTagName('*');

function toggleMenu(e) {

   function matchNavListItem() {
    for (var i=0; i<menuContentsArray.length; i++) {
      if (e.target == menuContentsArray[i]) {
        return true;
      };
    };
  };
  matchNavListItem();

  if (e.target == menuIcon) {
    if (closedClass.test(primaryMenu.className) ) {
      primaryMenu.className = primaryMenu.className.replace(/(\s)closed/," open");
    } else if (openClass.test(primaryMenu.className) ) {
      primaryMenu.className = primaryMenu.className.replace(/(\s)open/," closed");
    }
    e.preventDefault();
  } else if ( (e.target == primaryMenu.firstElementChild)||(matchNavListItem()) ) {
    return;
  } else if (openClass.test(primaryMenu.className) ) {
    primaryMenu.className = primaryMenu.className.replace(/(\s)open/," closed");
  }
}