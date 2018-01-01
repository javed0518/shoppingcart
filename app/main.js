require.config({
  paths: {
    'jquery': 'assets/vendor/bower_components/jquery/dist/jquery',
    'underscore': 'assets/vendor/bower_components/underscore/underscore',
    'backbone': 'assets/vendor/bower_components/backbone/backbone',
    'backbone.marionette': 'assets/vendor/bower_components/marionette/lib/backbone.marionette',
    'handlebars':'assets/vendor/bower_components/handlebars/handlebars',
    'hbars':'hbars'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    handlebars: { exports: 'Handlebars' },
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    marionette: {
      exports: 'Backbone.Marionette',
      deps: ['backbone']
    }
  },
  deps: ['jquery', 'underscore','']
});

require(['backbone.marionette'], function(Marionette) {
	var app = new Marionette.Application();
	app.start();
});