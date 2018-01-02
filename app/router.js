define(['backbone', 'backbone.marionette', 'views/productDetailsView'], function (Backbone, Marionette, ProductDetailsView) {

    let Router = Marionette.AppRouter.extend({
        routes: {
            '': 'productRoute'
        },

        productRoute: function () {
            let productDetailsView = new ProductDetailsView();
        }
    });

    return Router;

});