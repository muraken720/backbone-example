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

      _.bindAll(this, 'onAdd', 'onMessage');
      
      var client = tuppari.createClient({
          applicationId: 'd7d01460-0dac-4627-b4d2-3d1c17379aa6'
      });

      var channel = client.subscribe('message');
      channel.bind('text', this.onMessage);

    },

    onAdd:function (event) {
      console.log("AppView#onAdd");

      var text = this.$("#msg").val();

      this.storeData(text);

      this.$("#msg").val("");
    },

    onMessage:function (msg) {
      console.log("AppView#onMessage");

      this.storeData(msg);

    },

    storeData:function (data) {
      var message = new app.Message();

      message.set({"content": data});

      this.messageList.add(message);
    }
  });
});