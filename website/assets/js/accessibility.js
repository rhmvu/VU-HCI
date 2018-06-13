'use strict';


var unchecked = "fa fa-square pull-right";
var checked ="fa fa-check-square pull-right";



/* Get variables/elements*/
var fontSwitch = document.getElementById('fontSwitch');
var contrastSwitch = document.getElementById('contrastSwitch');

var fontSwitchMobile = null;
var contrastSwitchMobile = null;

//Get elements after their generation via util.js (document must be ready)
$(document).ready(function() {
  fontSwitchMobile = document.getElementById('fontSwitchMobile');
  contrastSwitchMobile = document.getElementById('contrastSwitchMobile');
});




/*Load user's stored preferences*/
if(getStoredValue('increaseFont') !== null && getStoredValue('increaseFont')=== '1'){
  fontSwitchOn();
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
      if ($("#fontSwitchIcon").attr("class")!==checked) {
        fontSwitchOn();
      }else{
        fontSwitchOff();
      }
      location.reload();//Quick fix for the check box
    },false)

});

$(document).ready(function() {
      contrastSwitch.addEventListener("click",function () {
      if ($("#contrastSwitchIcon").attr("class")!==checked) {
        contrastSwitchOn();
      }else{
        contrastSwitchOff();
      }
      location.reload();//Quick fix for the check box
      },false)
});



/*add mobile click handlers*/
$(document).ready(function() {
    fontSwitchMobile.addEventListener("click",function () {
      if ($("#fontSwitchIconMobile").attr("class")!==checked) {
        fontSwitchOn();
      }else{
        fontSwitchOff();
      }
    },false)
});

$(document).ready(function() {
      contrastSwitchMobile.addEventListener("click",function () {
      if ($("#contrastSwitchIconMobile").attr("class")!==checked) {
        contrastSwitchOn();
      }else{
        contrastSwitchOff();
      }
      },false)
});



/*functions*/
function contrastSwitchOn(){
  storeValue("increaseContrast",1);
  $("#additionalCSS2").attr("href","/assets/css/accessibility/increaseContrast.css");
  $("#contrastSwitchIcon").attr("class",checked);
  $("#contrastSwitchIconMobile").attr("class",checked);
}

function contrastSwitchOff() {
  storeValue("increaseContrast",0);
  $("#additionalCSS2").attr("href","");
  $("#contrastSwitchIcon").attr("class",unchecked);
  $("#contrastSwitchIconMobile").attr("class",unchecked);
}

function fontSwitchOn() {
  storeValue("increaseFont",1);
  $("#additionalCSS").attr("href","/assets/css/accessibility/increaseFont.css");
  $("#fontSwitchIcon").prop("class",checked);
  $("#fontSwitchIconMobile").prop("class",checked);
}

function fontSwitchOff() {
  storeValue("increaseFont",0);
  $("#additionalCSS").attr("href","");
  $("#fontSwitchIcon").prop("class",unchecked);
  $("#fontSwitchIconMobile").prop("class",unchecked);

}
