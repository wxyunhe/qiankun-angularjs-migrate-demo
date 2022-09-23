
// 导出生命周期到window下
window.angularjs = singleSpaAngular1.default({
  angular: window.angular,
  domElementGetter: function () {
    return document.getElementById('subapp-viewport');
  },
  mainAngularModule: 'main-module',
  preserveGlobal: true,
  template: '<root />',
});

angular.module('main-module', ['ui.router'])
  .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          "@": {
            template: `Home`
          }
        },
      })
      .state('about', {
        url: '/about',
        views: {
          "@": {
            template: `About`
          }
        },
      });
  }])
  .component('root', {
    template: `<div>
      Hello from angularjs!
      
      <div>
        <button ui-state="'home'">Home</button>
        <button ui-state="'about'">About</button>
      </div>
      <div ui-view></div>
    </div>`,
    controllerAs: 'vm',
    controller: function () {
      var vm = this;

      vm.$onInit = function () {
        console.log("mounting root angular component");
      };

      vm.$onDestroy = function () {

      };
    }
  });
