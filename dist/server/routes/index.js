/// <reference path="../../defs/server.d.ts"/>
///ts:import=Sayings
var Sayings = require('../../common/Sayings');

/* GET home page. */
function index(req, res) {
    var name = req.query.name;
    var greeter = new Sayings.Greeter(name ? name : "guest");
    res.render('index', { title: greeter.greet(10) });
}
exports.index = index;
;
//# sourceMappingURL=index.js.map
