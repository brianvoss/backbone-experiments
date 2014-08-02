
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home',
  'views/user/list',
  'views/user/add',
  'views/user/edit'
], function($, _, Backbone, HomeView, UserListView, UserAddView, UserEditView){

  var UserRouter = Backbone.Router.extend({

    routes: {
      'users(/:action)(/:id)': 'userDispatch',
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
      var view = new UserAddView();
      view.render();
    },
    
    editUser: function(id) {
      var view = new UserEditView();
      view.render();
    },

    deleteUser: function(id) {

    },

    listUsers: function() {
    	var view = new UserListView();
    	view.render();
    },

    defaultAction: function(actions){
      console.log('user router default: ' + actions);
      var view = new HomeView();
      view.render();
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