var app = app || {};

$(function () {
  
  app.AppView = Backbone.View.extend({
  
    el: "#index",

    events: {
      "click #addbtn": "onAdd"
    },

    initialize:function () {
      console.log("AppView#initialize");

      this.messageList = new app.MessageList();

      var listview = new app.MessageListView(this.messageList);

      _.bindAll(this, 'onAdd');
      
    },

    onAdd:function () {
      console.log("AppView#onAdd");

      var text = this.$("#msg").val();

      var message = new app.Message();
      message.set({"content": text});

      this.messageList.add(message);

      this.$("#msg").val("");
    }
  });
});