
define([
  'jquery',
  'underscore',
  'backbone',
  'app',
  'views/user/list'
], function($, _, Backbone, App, UserListView){

  var AppRouter = Backbone.Router.extend({

    routes: {
      '*actions': 'defaultAction'
    },

    defaultAction: function(actions){
      console.log('default route: ' + actions);
    }

  });

  var initialize = function(){
    var app_router = new AppRouter();

    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });

    app_router.on('execute', function(callback, args) {
      console.log('router::execute ' + callback);
      console.log('router::execute ' + args);
    });

    app_router.on('route', function(route, params) {
      console.log('router::route ' + route);
      console.log('router::route ' + params);
    });

  };

  return {
    initialize: initialize
  };

});