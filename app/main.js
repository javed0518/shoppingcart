require.config({
    paths: {
        'jquery': 'assets/vendor/jquery/dist/jquery',
        'underscore': 'assets/vendor/underscore/underscore',
        'backbone': 'assets/vendor/backbone/backbone',
        'backbone.marionette': 'assets/vendor/backbone.marionette/lib/backbone.marionette',
        'backbone.radio': 'assets/vendor/backbone.radio/build/backbone.radio',
        'handlebars': 'assets/vendor/handlebars/handlebars',
        'hbars': 'hbars',
        'requirejs': 'assets/vendor/requirejs/require',
        'text': 'assets/vendor/text/text'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        handlebars: {exports: 'Handlebars'},
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        }
    },
    deps: ['jquery', 'underscore', '']
});

require(['backbone', 'backbone.marionette', 'router'], function (Backbone, Marionette, Router) {
    let app = new Marionette.Application();
    app.start();

    let appRouter = new Router();
    Backbone.history.start();
});