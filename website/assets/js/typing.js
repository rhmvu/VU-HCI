"use strict";


var i = 0;
var txt = 'Where functionality meets Fashion'; /* The text */
var typingSpeed = 80; /* The speed/duration of the effect in milliseconds */
//var dataSentences = "Where funtionality meets fashion,Fashion meets functionality,Innovative and Healthy,Taking the responsibility for you";

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("headerP").innerHTML = txt.substring(0,i+1);
    i++;
    setTimeout(typeWriter, typingSpeed);
  }
}



var j = 0.1;
var baseTxt = 'Clothing ';
var countingSpeed = 80;
var tim;

function counter(){
  tim = setInterval(function(){

    if(j>=4.0){clearInterval(tim); return;}
    j = j+0.1;

    document.getElementById("headerH2").innerHTML = baseTxt+j.toFixed(1);
  },countingSpeed);
}


$(document).ready(function () {
  typeWriter();
  counter();
});
