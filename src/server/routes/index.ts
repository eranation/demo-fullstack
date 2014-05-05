/// <reference path="../../defs/server.d.ts"/>
///ts:import=Sayings
import Sayings = require('../../common/Sayings'); ///ts:import:generated

import express = require('express');

/* GET home page. */
export function index(req:express.Request, res:express.Response) {
    var name = req.query.name;
    var greeter = new Sayings.Greeter(name?name : "guest");
    res.render('index', { title: greeter.greet() });
};

