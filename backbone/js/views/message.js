var app = app || {};

$(function () {
	
  app.MessageListView = Backbone.View.extend({
  
    el: "#msglist",

    template: _.template($("#li-template").html()),
    
    initialize:function (messageList) {
      console.log("MessageListView#initialize");

      this.collection = messageList;

      this.collection.bind("add", this.render, this);
  
    },

    render:function (msg) {
      $(this.el).append(this.template(msg.toJSON()));

      $(this.el).listview('refresh');

    }
  });
});