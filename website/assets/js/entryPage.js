window.onload = function() {
//  document.getElementById('landingline1').style.opacity = '1';
//  window.setTimeout(fadeinline2, 1000); //0.5 seconds
  window.setTimeout(fadeoutAll, 500); //2 seconds
}

function fadeinline2() {
  document.getElementById('landingline2').style.opacity = '1';
}

function fadeoutAll() {
  document.getElementById('landingDIV').style.opacity = '0';
  window.setTimeout(function(){
    document.getElementById('landingDIV').style.display = 'none';
  },1000);
}
