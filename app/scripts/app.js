/**
 * App Logic
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'routes/main',
  'routes/user'
], function($, _, Backbone, AppRouter, UserRouter){

  var initialize = function(){

    // Enable routing
    AppRouter.initialize();
    UserRouter.initialize();

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };

});