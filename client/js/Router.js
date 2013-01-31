define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/OneView',
  'js/views/TwoView'
], function($, _, Backbone, OneView, TwoView){
  new $.mobile.Router({
    "/one":   { handler: 'one', events: "bc" },
    "/two":   { handler: 'two', events: "bc" }
  }, {
    one: function(){
      new OneView().render();
    },

    two: function(){
      new TwoView().render();
    },

    'default': function(){
      console.log('No route found.');
    }
  }, {
    ajaxApp: true,
    defaultHandler: 'default'
  });
});
