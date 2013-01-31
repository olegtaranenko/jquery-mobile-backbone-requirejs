require({
  paths: {
    text: 'js/libs/amd/plugins/text',
    jquery: 'js/libs/jquery',
    jqueryM: 'js/libs/jquery.mobile',
    underscore: 'js/libs/underscore',
    backbone: 'js/libs/backbone',
    jquerymobilerouter: 'js/libs/jquery.mobile.router'
  }
}, [
  'jquery',
  'jqueryM',
  'underscore',
  'backbone',
  'jquerymobilerouter',
  'js/Router'
], function($, $$, _, Backbone, Router){

  $(function(){
  });
});
