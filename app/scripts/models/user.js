/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({

        initialize: function() {
            console.log('user model initialize');
        },

        defaults: {
            first_name: '',
            last_name: '',
            email: '',
            password_hash: ''
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
