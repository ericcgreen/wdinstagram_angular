"use strict";

let data = [
  {photo_url: "https://pbs.twimg.com/profile_images/786681705981673472/T5OKNZ1-.jpg", author: "Eric", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
  {photo_url: "https://pbs.twimg.com/profile_images/786681705981673472/T5OKNZ1-.jpg", author: "Eva", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
  {photo_url: "https://pbs.twimg.com/profile_images/786681705981673472/T5OKNZ1-.jpg", author: "Andy", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
]


angular
  .module("wdinstagram", [])
  .controller("wdiCtrl", [wdinstagramController])

function wdinstagramController(){
  this.instas = data
}
