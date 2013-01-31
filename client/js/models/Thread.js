/**
 * The file is a part of Bootcamp project
 * (c) 2013 oDesk Corp all rights reserved
 */
var Thread = Backbone.Model.extend({
  defaults: {
    starred: false,
    read: false,
    type: 'Message',
    participants: []
  }
});
 