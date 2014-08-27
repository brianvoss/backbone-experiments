/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'app',
    'jquery'
], function (Application, $) {

    jQuery.ajaxSetup({
        accepts: {
            json: 'application/json'
        }
    });

    $.ajaxPrefilter(function(options){
        options.url = 'http://localhost:8000' + options.url;
    });

    // Create Global Namespace
    window.App = {
        Models: {},
        Collections: {},
        Views: {}
    };
    // Start the app
    Application.initialize();
});
