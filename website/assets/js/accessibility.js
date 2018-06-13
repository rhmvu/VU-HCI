'use strict';


var unchecked = "fa fa-square pull-right";
var checked ="fa fa-check-square pull-right";

var fontSwitch = document.getElementById('fontSwitch');
var contrastSwitch = document.getElementById('contrastSwitch');

var fontSwitchMobile = document.getElementById('fontSwitchMobile');
var contrastSwitchMobile = document.getElementById('contrastSwitchMobile');


$(document).ready(function() {
  fontSwitchMobile = document.getElementById('fontSwitchMobile');
  contrastSwitchMobile = document.getElementById('contrastSwitchMobile');
});





if(getStoredValue('increaseFont') !== null && getStoredValue('increaseFont')=== '1'){
  fontSwitchOn();
  fontSwitchOnMobile();
}



if(getStoredValue('increaseContrast') !== null && getStoredValue('increaseContrast')=== '1'){
  contrastSwitchOn();
  fontSwitchOffMobile();
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
      console.log("CLICKED FONT");
      if ($("#fontSwitchIcon").attr("class")!==checked) {
        storeValue("increaseFont",1);
        fontSwitchOn();
        console.log("Put fontSwitchOn");
      }else{
        storeValue("increaseFont",0);
        fontSwitchOff();
        console.log("Put fontSwitchOFF");
      }
      location.reload();//Quick fix for the check box
    },false)

});

$(document).ready(function() {
      contrastSwitch.addEventListener("click",function () {
      if ($("#contrastSwitchIcon").attr("class")!==checked) {
        storeValue("increaseContrast",1);
        contrastSwitchOn();
      }else{
        storeValue("increaseContrast",0);
        contrastSwitchOff();
      }
      location.reload();//Quick fix for the check box
      },false)
});



/*add mobile click handlers*/
$(document).ready(function() {
    fontSwitchMobile.addEventListener("click",function () {
      console.log("CLICKED FONT");
      if ($("#fontSwitchIconMobile").attr("class")!==checked) {
        storeValue("increaseFont",1);
        fontSwitchOnMobile();
        console.log("Put fontSwitchOn");
      }else{
        storeValue("increaseFont",0);
        fontSwitchOffMobile();
        console.log("Put fontSwitchOFF");
      }
    },false)

});

$(document).ready(function() {
      contrastSwitchMobile.addEventListener("click",function () {
      if ($("#contrastSwitchIconMobile").attr("class")!==checked) {
        storeValue("increaseContrast",1);
        contrastSwitchOnMobile();
      }else{
        storeValue("increaseContrast",0);
        contrastSwitchOffMobile();
      }

      },false)
});




function contrastSwitchOnMobile(){
  $("#additionalCSS2").attr("href","/assets/css/accessibility/increaseContrast.css");
  $("#contrastSwitchIconMobile").attr("class",checked);
}

function contrastSwitchOffMobile() {
  $("#additionalCSS2").attr("href","");
  $("#contrastSwitchIconMobile").attr("class",unchecked);
}

function fontSwitchOnMobile() {
  $("#additionalCSS").attr("href","/assets/css/accessibility/increaseFont.css");
  $("#fontSwitchIconMobile").prop("class",checked);
}

function fontSwitchOffMobile() {
  $("#additionalCSS").attr("href","");
  $("#fontSwitchIconMobile").prop("class",unchecked);

}




/*functions*/
function contrastSwitchOn(){
  $("#additionalCSS2").attr("href","/assets/css/accessibility/increaseContrast.css");
  $("#contrastSwitchIcon").attr("class",checked);
}

function contrastSwitchOff() {
  $("#additionalCSS2").attr("href","");
  $("#contrastSwitchIcon").attr("class",unchecked);
}

function fontSwitchOn() {
  $("#additionalCSS").attr("href","/assets/css/accessibility/increaseFont.css");
  $("#fontSwitchIcon").prop("class",checked);
}

function fontSwitchOff() {
  $("#additionalCSS").attr("href","");
  $("#fontSwitchIcon").prop("class",unchecked);

}
