$(function() {
  var collection = [];
  
  var template = _.template($('#li-template').html());
  
  $("#addbtn").bind('click', function(e) {

    var text = $("#msg").val();
    collection.push({"content": text});
    
    $("#msg").val("");
    
    $("#msglist").empty();

    _.each(collection, function(data) {
      
        $("#msglist").append(template(data));s
    });
    
    $("#msglist").listview('refresh');
      
  });
});
