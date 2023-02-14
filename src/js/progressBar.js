const animaciones = () => {
  animateprogress("#html5",100);
  animateprogress("#php",90);
  animateprogress("#css",100);
  animateprogress("#javascript",80);
  animateprogress("#nodejs",50);
  animateprogress("#reactjs",70);
  animateprogress("#angularjs",50);
  animateprogress("#webpack",50);
  animateprogress("#nextjs",60);
  animateprogress("#java",80);
  animateprogress("#springboot",50);
  animateprogress("#github",70);
}

window.onload = () => { 
  animaciones();
} 	

document.addEventListener('scroll', () => {
  animaciones();
})


function animateprogress (id, val){    
  var getRequestAnimationFrame = function () {  
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||  
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function ( callback ){
      window.setTimeout(enroute, 1 / 60 * 1000);
    };
  };
  var fpAnimationFrame = getRequestAnimationFrame();  
  var i = 0;
  var animacion = function () {
    if (i<=val) {
      document.querySelector(id).setAttribute("value",i);
      document.querySelector(id+"+ span").innerHTML = i+"%";
      i+=2;
      fpAnimationFrame(animacion);
    }
  }
  fpAnimationFrame(animacion);
}