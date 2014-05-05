define(["require", "exports", '../common/Sayings'], function(require, exports, Sayings) {
    console.log(new Sayings.Greeter("from client3!").greet());

    var greeter = new Sayings.Greeter("world4");

    var button = document.createElement('button');
    button.textContent = "Say Hello";
    button.onclick = function () {
        return alert(greeter.greet());
    };

    window.addEventListener("load", function (event) {
        alert("loaded" + event.target);
        document.body.appendChild(button);
        var element = document.querySelector("#test");
        element.style.borderColor = "blue";
        element.onmouseover = function (event) {
            alert(event.altKey);
        };
    });

    var result = [1, 2, 3, 4, 5].map(function (val, index) {
        return val * 2;
    });
    console.log(result);

    alert(greeter.greet());
});
//# sourceMappingURL=clientApp.js.map
