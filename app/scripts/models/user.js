/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({

        urlRoot: '/contacts',

        initialize: function() {
            console.log('user model initialize');
        },

        defaults: {
            firstname   : '',
            lastname    : '',
            email       : '',
            phone       : '',
            favorite    : "0"
        },

        url: function() {

        },

        validate: function(attrs, options) {
        
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return UserModel;
});
