// spa.shell.js
// SPA용 셀 모듈

spa.shell = (function () {
  // 모듈 스코프 변수 시작
  var configMap = {
      main_html: /*html*/ `
    <div class="spa-shell-head">
      <div class="spa-shell-head-logo"></div>
      <div class="spa-shell-head-acct"></div>
      <div class="spa-shell-head-search"></div>
    </div>
    <div class="spa-shell-main">
      <div class="spa-shell-main-nav"></div>
      <div class="spa-shell-main-content"></div>
    </div>
    <div class="spa-shell-foot"></div>
    <div class="spa-shell-chat"></div>
    <div class="spa-shell-modal"></div>
    `
    },
    stateMap = {
      $container: null
    },
    jqueryMap = {},

    setJqueryMap, initModule;
  // module scoped end

  // BEGIN utility methods
  // END utility methods

  // BEGIN DOM methods 
  // DOM methods BEGIN setJqueryMap
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container: $container
    };
  };
  // DOM methods END setJqueryMap

  // eventHandler BEGIN
  // eventHandler END

  // public methods BEGIN
  // public methods /initModule/ BEGIN
  initModule = function ($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();
  }
  // public methods /initModule/ END

  return {
    initModule: initModule
  };
  // public methods END
}());