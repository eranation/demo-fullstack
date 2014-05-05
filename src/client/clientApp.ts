/// <reference path="../defs/client.d.ts"/>

///ts:import=Sayings
import Sayings = require('../common/Sayings'); ///ts:import:generated

import $ = require("jquery");

console.log(new Sayings.Greeter("from client3!").greet());

var greeter = new Sayings.Greeter("world4");

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = () => alert(greeter.greet());

$(document).ready(()=>{
  //console.log(event);
  //alert("loaded" + event.target);
  document.body.appendChild(button);
  var element = <HTMLElement>document.querySelector("#test");
  element.style.borderColor = "blue";
  element.onmouseover = (event:MouseEvent) => {
    element.innerHTML += greeter.greet() + "test5 " + event.altKey + " " + event.ctrlKey + "<br>";
  }
});
//window.addEventListener( "load", ()=> alert("loaded2"), false );
//
//window.addEventListener("load", (event:Event)=> {
//
//});



var result = [1,2,3,4,5].map((val, index) => val * 2);
console.log(result);

alert(greeter.greet());

