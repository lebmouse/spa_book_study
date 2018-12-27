// 
// spa.js
// 루트 네임스페이스 모듈
// 


// global $, spa 

var spa = (function () {
  var initModule = function ($container) {
    spa.shell.initModule($container);
    // console.log('asdf')
  }
  return {
    initModule: initModule
  };
}());