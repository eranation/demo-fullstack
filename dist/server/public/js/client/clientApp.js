/// <reference path="../defs/client.d.ts"/>
define(["require", "exports", '../common/Sayings', "jquery"], function(require, exports, Sayings, $) {
    console.log(new Sayings.Greeter("from client13!").greet(2));

    var greeter = new Sayings.Greeter("world4");

    var button = document.createElement('button');
    button.textContent = "Say Hello";
    button.onclick = function () {
        return alert(greeter.greet(3));
    };

    $(document).ready(function () {
        //console.log(event);
        //alert("loaded" + event.target);
        document.body.appendChild(button);
        var element = document.querySelector("#test");
        element.style.borderColor = "blue";
        element.onmouseover = function (event) {
            element.innerHTML += greeter.greet(4) + "test5 " + event.altKey + " " + event.ctrlKey + "<br>";
        };
    });

    //window.addEventListener( "load", ()=> alert("loaded2"), false );
    //
    //window.addEventListener("load", (event:Event)=> {
    //
    //});
    var result = [1, 2, 3, 4, 5].map(function (val, index) {
        return val * 2;
    });
    console.log(result);

    alert(greeter.greet(2));
});
//# sourceMappingURL=clientApp.js.map
