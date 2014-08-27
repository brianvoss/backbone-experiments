/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/user',
    'lib/util/form'
], function ($, _, Backbone, JST, UserModel, FormHelper) {
    'use strict';

    var AddUserView = Backbone.View.extend({

        template: JST['app/scripts/templates/user/add.ejs'],

        el: '#content',

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'submit #add-user-form':'addUserFormSubmit',
            'click input.cancel':'cancelAddUser'
        },

        initialize: function() {
            this.model = new UserModel();
        },

        render: function() {
            this.$el.html(this.template());
        },

        /**
         * Add User Form Handler
         */
        addUserFormSubmit: function(event){
            var form = event.target,
                form_data = FormHelper.serialize(form);
            var user = new UserModel();
            user.save(form_data, {
                success: function(user){
                    console.dir(user);
                }
            });
            return false;
        },
        /**
         * 
         */
        cancelAddUser: function(/*event*/){
            //router.navigate('/users', {trigger: true});
        }
    });

    return AddUserView;
});
