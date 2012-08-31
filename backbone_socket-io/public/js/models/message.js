var app = app || {};

(function() {
  
  // Model
  app.Message = Backbone.Model.extend({
    defaluts: {
      "content": ""
    }    
  });
  
  // Collection
  app.MessageList = Backbone.Collection.extend({
    model: app.Message
  });

}());
