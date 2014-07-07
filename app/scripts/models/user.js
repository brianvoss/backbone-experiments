/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
            console.log('user model initialize');
        },

        defaults: {
            first_name: '',
            last_name: '',
            email: '',
            password_hash: ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return UserModel;
});
