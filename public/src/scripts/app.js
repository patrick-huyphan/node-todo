'use strict';
/* App Module */
var petClinicApp = angular.module('petClinicApp', [
    'ui.router', 'infrastructure', 'layoutNav', 'layoutFooter', 'layoutWelcome','layoutRight',
    'ownerList', 'ownerDetails', 'ownerForm', 'comList', 'comDetails', 'comForm','petForm', 'visits', 'vetList']);

petClinicApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function(
    $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    // safari turns to be lazy sending the Cache-Control header
    $httpProvider.defaults.headers.common["Cache-Control"] = 'no-cache';
    $httpProvider.interceptors.push('HttpErrorHandlingInterceptor');

    //$locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/page0');
    $stateProvider
        .state('page0', {
            abstract: true,
            url: '',
            template: '<ui-view></ui-view>'
        })
        .state('page0', {
            parent: 'app',
            url: '/page0',
            template: '<layout-welcome></layout-welcome>'
        });
}]);

['welcome', 'nav', 'footer', 'right'].forEach(function(c) {
    var mod = 'layout' + c.toUpperCase().substring(0, 1) + c.substring(1);
    angular.module(mod, []);
    angular.module(mod).component(mod, {
        templateUrl: "src/scripts/fragments/" + c + ".html"
    });
});
