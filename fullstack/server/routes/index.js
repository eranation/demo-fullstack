var Sayings = require('../../common/Sayings');

function index(req, res) {
    var name = req.query.name;
    var greeter = new Sayings.Greeter(name ? name : "guest");
    res.render('index', { title: greeter.greet() });
}
exports.index = index;
;
//# sourceMappingURL=index.js.map
