window.onload = function() {
  document.getElementById('landingline1').style.opacity = '1';
  window.setTimeout(fadeinline2, 500); //0.5 seconds
  window.setTimeout(fadeoutAll, 2000); //2 seconds
}

function fadeinline2() {
  document.getElementById('landingline2').style.opacity = '1';
}

function fadeoutAll() {
  document.getElementById('landingDIV').style.opacity = '0';
}
