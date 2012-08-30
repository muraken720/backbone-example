var app = app || {};

$(function () {
	
  app.AppView = Backbone.View.extend({
  
    el: "#index",

    events: {
      "click #addbtn": "onMessage"
    },

    initialize:function () {
      console.log("AppView#initialize");

      this.messageList = new app.MessageList();

      var listview = new app.MessageListView(this.messageList);

      _.bindAll(this, 'onMessage');
      
      var client = tuppari.createClient({
          applicationId: 'd7d01460-0dac-4627-b4d2-3d1c17379aa6'
      });

      var channel = client.subscribe('message');
      channel.bind('text', this.onMessage);

    },

    onMessage:function () {
      console.log("AppView#onMessage");

      var text = this.$("#msg").val();

      var message = new app.Message();
      message.set({"content": text});

      this.messageList.add(message);

      this.$("#msg").val("");
    }
  });
});