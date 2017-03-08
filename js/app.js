"use strict";

let data = [
  {photo_url: "https://lh3.googleusercontent.com/aYbdIM1abwyVSUZLDKoE0CDZGRhlkpsaPOg9tNnBktUQYsXflwknnOn2Ge1Yr7rImGk=w300", author: "Eric", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", id: 0},
  {photo_url: "https://lh3.googleusercontent.com/aYbdIM1abwyVSUZLDKoE0CDZGRhlkpsaPOg9tNnBktUQYsXflwknnOn2Ge1Yr7rImGk=w300", author: "Eva", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", id: 1},
  {photo_url: "https://lh3.googleusercontent.com/aYbdIM1abwyVSUZLDKoE0CDZGRhlkpsaPOg9tNnBktUQYsXflwknnOn2Ge1Yr7rImGk=w300", author: "Andy", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", id: 2}
]

angular
  .module("wdinstagram", ["ui.router"])
  .config(["$stateProvider", RouterFunction])
  .controller("wdiIndexCtrl", ["$stateParams", wdinstagramIndexController])
  .controller("wdiNewCtrl", ["$stateParams", wdinstagramNewController])
  .controller("wdiShowCtrl", ["$stateParams",
  wdinstagramShowController])

function RouterFunction($stateProvider){
  $stateProvider
  .state("wdiIndex", {
    url: "/instas",
    templateUrl: "js/ng-views/index.html",
    controller: "wdiIndexCtrl",
    controllerAs: "vm"
  })
  .state("wdiNew", {
    url: "/instas/new",
    templateUrl: "js/ng-views/new.html",
    controller: "wdiNewCtrl",
    controllerAs: "vm"
  })
  .state("wdiShow", {
    url: "/instas/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "wdiShowCtrl",
    controllerAs: "vm"
  })
}

function wdinstagramIndexController(){
  this.instas = data
}

function wdinstagramNewController($stateParams){
  this.create = function(){
    this.insta.save(function(insta) {
      $state.go("wdiShow", {id: insta.id})
    })
  }
}

function wdinstagramShowController($stateParams){
  this.insta = data[$stateParams.id]
}
