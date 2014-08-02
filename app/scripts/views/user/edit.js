/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/user'
], function ($, _, Backbone, JST, UserCollection, UserModel) {
    'use strict';

    var EditUserView = Backbone.View.extend({

        template: JST['app/scripts/templates/user/edit.ejs'],

        el: '#content',

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.model = new UserModel();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return EditUserView;
});
