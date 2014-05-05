/* GET users listing. */

/// <reference path="../../defs/server.d.ts"/>

import ex = require('express');

export function list(req: ex.Request, res: ex.Response) {
    res.send('respond with a resource');
};
