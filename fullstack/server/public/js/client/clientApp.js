define(["require", "exports", '../common/Sayings', "jquery"], function(require, exports, Sayings, $) {
    console.log(new Sayings.Greeter("from client3!").greet());

    var greeter = new Sayings.Greeter("world4");

    var button = document.createElement('button');
    button.textContent = "Say Hello";
    button.onclick = function () {
        return alert(greeter.greet());
    };

    $(document).ready(function () {
        document.body.appendChild(button);
        var element = document.querySelector("#test");
        element.style.borderColor = "blue";
        element.onmouseover = function (event) {
            element.innerHTML += greeter.greet() + "test5 " + event.altKey + " " + event.ctrlKey + "<br>";
        };
    });

    var result = [1, 2, 3, 4, 5].map(function (val, index) {
        return val * 2;
    });
    console.log(result);

    alert(greeter.greet());
});
//# sourceMappingURL=clientApp.js.map
