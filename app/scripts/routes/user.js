
define([
  'jquery',
  'underscore',
  'backbone',
  'views/user/list'
], function($, _, Backbone, UserListView){

  var UserRouter = Backbone.Router.extend({

    routes: {
      'user(/:action)(/:id)': 'userDispatch',
      '*actions': 'defaultAction'
    },

    userDispatch: function(action, id) {
    	
      switch(action) {
      	case 'add':
      		this.addUser();
      		break;
      	case 'edit':
      		this.editUser(id);
      		break;
      	case 'delete':
      		this.deleteUser(id);
      		break;
      	case 'list':
      	case null:
      	default:
      		this.listUsers();
      		break;
      }
    },

    addUser: function() {

    },

    editUser: function(id) {

    },

    deleteUser: function(id) {

    },

    listUsers: function() {
    	var view = new UserListView();
    	view.render();
    },

    defaultAction: function(actions){
      console.log('user router default: ' + actions);
    }

  });

  var initialize = function(){
    var user_router = new UserRouter();

    user_router.on('execute', function(callback, args) {
      console.log('userRouter::execute ' + callback);
      console.log('userRouter::execute ' + args);
    });

    user_router.on('route', function(route, params) {
      console.log('userRouter::route ' + route);
      console.log('userRouter::route ' + params);
    });

  };

  return {
    initialize: initialize
  };

});