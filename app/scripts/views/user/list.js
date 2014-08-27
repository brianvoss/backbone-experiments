/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/user'
], function ($, _, Backbone, JST, UserCollection) {
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
            var that = this;
            this.collection.fetch({

                dataType: 'json',
                /**
                 *
                 */
                success: function(collection/*, response, options*/){
                    that.$el.html(that.template({users: collection.toJSON()}));
                },
                error: function(/**collection, response, options**/){
                    //that.$el.html(that.template({users: collection.toJSON()}));
                }
            });
        }
    });

    return UserView;
});
