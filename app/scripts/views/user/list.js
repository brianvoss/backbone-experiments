/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/user',
    'models/user'
], function ($, _, Backbone, JST, UserCollection, UserModel) {
    'use strict';

    var UserView = Backbone.View.extend({

        template: JST['app/scripts/templates/user/list.ejs'],

        el: '#content',

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.collection = new UserCollection();
            this.listenTo(this.collection, 'change', this.render);
        },

        render: function () {
            this.collection.add([
                {
                    id: null,
                    first_name: 'Brian',
                    last_name: 'Voss',
                    email: 'brian@brianvoss.com',
                    password_hash: ''
                },
                {
                    id: null,
                    first_name: 'Rendon',
                    last_name: 'Barthalow',
                    email: 'rbar@gmail.com',
                    password_hash: ''
                },
                {
                    id: null,
                    first_name: 'Terry',
                    last_name: 'Moss',
                    email: 'tmoss@gmail.com',
                    password_hash: ''
                }
            ]);
            
            this.$el.html(this.template({users: this.collection.toJSON()}));
        }
    });

    return UserView;
});
