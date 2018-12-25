// 
// spa.js
// 루트 네임스페이스 모듈
// 


// global $, spa 

var spa = (function () {
  var initModule = function ($container) {
    $container.html(
      `<h1 style="display:inline-block; margin:25px;">
      hellow world!
      </h1>`
    );
    
    return { initModule: initModule};
  }
}());