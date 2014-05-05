// contents of main.js:
require.config({
    baseUrl: 'js',
    "paths": {
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
    //urlArgs: "bust=" + (new Date()).getTime()
});

require(['client/clientApp'], function () { });