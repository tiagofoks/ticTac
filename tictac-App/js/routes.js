angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('mainUser', {
    url: '/page1',
    templateUrl: 'templates/mainUser.html',
    controller: 'mainUserCtrl'
  })

  .state('usuRio', {
    url: '/page2',
    templateUrl: 'templates/usuRio.html',
    controller: 'usuRioCtrl'
  })

  .state('minhasViagens', {
    url: '/page3',
    templateUrl: 'templates/minhasViagens.html',
    controller: 'minhasViagensCtrl'
  })

  .state('yellow', {
    url: '/page4',
    templateUrl: 'templates/yellow.html',
    controller: 'yellowCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});