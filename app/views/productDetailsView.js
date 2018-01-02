define(['backbone', 'backbone.marionette', 'Templates'], function (Backbone, Marionette, templates) {

    let ProductDetailsView = Marionette.View.extend({
        el: "#mainApp",

        template: templates.productDetailsView,

        initialize: function () {
          this.render();
          console.log("View Initialized")
        },

        render: function () {
            this.$el.html(this.template);
        }
    });

    return ProductDetailsView;

});