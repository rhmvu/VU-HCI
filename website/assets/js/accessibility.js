'use strict';


var unchecked = "fa fa-square pull-right";
var checked ="fa fa-check-square pull-right";


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
    $("#fontSwitch").click(function () {
      if ($("#fontSwitchIcon").attr("class")!==checked) {
        storeValue("increaseFont",1);
        fontSwitchOn();
      }else{
        storeValue("increaseFont",0);
      fontSwitchOff();
      }
    })
});

$(document).ready(function() {
    $("#contrastSwitch").click(function () {
      if ($("#contrastSwitchIcon").attr("class")!==checked) {
        storeValue("increaseContrast",1);
        contrastSwitchOn();
      }else{
        storeValue("increaseContrast",0);
        contrastSwitchOff();
      }
    })
});


/*functions*/
function contrastSwitchOn(){
  $("#additionalCSS2").attr("href","/assets/css/accessibility/increaseContrast.css");
  $("#contrastSwitchIcon").prop("class",checked);
}

function contrastSwitchOff() {
  $("#additionalCSS2").attr("href","");
  $("#contrastSwitchIcon").prop("class",unchecked);
}

function fontSwitchOn() {
  $("#additionalCSS").attr("href","/assets/css/accessibility/increaseFont.css");
  $("#fontSwitchIcon").prop("class",checked);

}

function fontSwitchOff() {
  $("#additionalCSS").attr("href","");
  $("#fontSwitchIcon").prop("class",unchecked);

}
