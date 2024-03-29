'use strict';

var increasedContrast = false;
var increasedFont = false;
var boldText = false;

/* Get variables/elements*/

var fontSwitch = document.getElementById('fontSwitch');
var boldSwitch = document.getElementById('boldSwitch');
var contrastSwitch = document.getElementById('contrastSwitch');

var fontSwitchMobile = null;
var boldSwitchMobile = null;
var contrastSwitchMobile = null;

//Get elements after their generation via util.js (document must be ready)
$(document).ready(function() {
  fontSwitchMobile = document.getElementById('fontSwitchMobile');
  boldSwitchMobile = document.getElementById('boldSwitchMobile');
  contrastSwitchMobile = document.getElementById('contrastSwitchMobile');
});




/*Load user's stored preferences*/
if(getStoredValue('increaseFont') !== null && getStoredValue('increaseFont')=== '1'){
  fontSwitchOn();
}
if(getStoredValue('boldText') !== null && getStoredValue('boldText')=== '1'){
  boldSwitchOn();
}


if(getStoredValue('increaseContrast') !== null && getStoredValue('increaseContrast')=== '1'){
  contrastSwitchOn();
}



/*cookie management to save the user's preferences*/
function storeValue(key, value) {
    if (localStorage) {
        localStorage.setItem(key, value);
    } else {
        $.cookies.set(key, value);
    }
}

function getStoredValue(key) {
    if (localStorage) {
        return localStorage.getItem(key);
    } else {
        return $.cookies.get(key);
    }
}


/*click handlers for the menu*/
$(document).ready(function() {
    fontSwitch.addEventListener("click",function () {
      if (!increasedFont) {
        fontSwitchOn();
      }else{
        fontSwitchOff();
      }
      //location.reload();//Quick fix for the check box
    },false)

});

$(document).ready(function() {
    boldSwitch.addEventListener("click",function () {
      if (!boldText) {
        boldSwitchOn();
      }else{
        boldSwitchOff();
      }
      //location.reload();//Quick fix for the check box
    },false)

});



$(document).ready(function() {
      contrastSwitch.addEventListener("click",function () {
      if (!increasedContrast) {
        contrastSwitchOn();
      }else{
        contrastSwitchOff();
      }
    //  location.reload();//Quick fix for the check box
      },false)
});



/*add mobile click handlers*/
$(document).ready(function() {
    fontSwitchMobile.addEventListener("click",function () {
      if (!increasedFont) {
        fontSwitchOn();
      }else{
        fontSwitchOff();
      }
    //  location.reload();//Quick fix for the check box
    },false)
});

$(document).ready(function() {
    boldSwitchMobile.addEventListener("click",function () {
      if (!boldText) {
        boldSwitchOn();
      }else{
        boldSwitchOff();
      }
    //  location.reload();//Quick fix for the check box
    },false)
});




$(document).ready(function() {
      contrastSwitchMobile.addEventListener("click",function () {
      if (!increasedContrast) {
        contrastSwitchOn();
      }else{
        contrastSwitchOff();
      }
    //  location.reload();//Quick fix for the check box
      },false)
});



/*functions*/
function contrastSwitchOn(){
  increasedContrast = true;
  console.log('CONTRAST ON');
  storeValue("increaseContrast",1);
  $("#additionalCSS2").attr("href","/assets/css/accessibility/increaseContrast.css");
}

function contrastSwitchOff() {
  increasedContrast = false;
  console.log('CONTRAST OFF');
  storeValue("increaseContrast",0);
  $("#additionalCSS2").attr("href","");
}

function fontSwitchOn() {
  increasedFont = true;
  console.log('FONT ON');
  storeValue("increaseFont",1);
  $("#additionalCSS").attr("href","/assets/css/accessibility/increaseFont.css");
}

function fontSwitchOff() {
  increasedFont = false;
  console.log('FONT OFF');
  storeValue("increaseFont",0);
  $("#additionalCSS").attr("href","");
}

function boldSwitchOn() {
  boldText = true;
  console.log('BOLD ON');
  storeValue("boldText",1);
  $("#additionalCSS3").attr("href","/assets/css/accessibility/boldText.css");
}

function boldSwitchOff() {
  boldText = false;
  console.log('BOLD OFF');
  storeValue("boldText",0);
  $("#additionalCSS3").attr("href","");
}
