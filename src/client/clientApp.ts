///ts:import=Sayings
import Sayings = require('../common/Sayings'); ///ts:import:generated

console.log(new Sayings.Greeter("from client3!").greet());

var greeter = new Sayings.Greeter("world4");

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = () => alert(greeter.greet());

window.addEventListener("load", (event:Event)=> {
  alert("loaded" + event.target);
  document.body.appendChild(button);
  var element = <HTMLElement>document.querySelector("#test");
  element.style.borderColor = "blue";
  element.onmouseover = (event:MouseEvent) => {
    alert(event.altKey);
  }
//  alert(2);
  //element.parentElement.onclick = (x) => alert(x.target);

});



var result = [1,2,3,4,5].map((val, index) => val * 2);
console.log(result);

alert(greeter.greet());