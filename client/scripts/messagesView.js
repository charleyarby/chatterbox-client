var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(data) {
    console.log(data)
    if(data.results){
     for(var i=0; i<data.results.length; i++){
      $("#chats").append(MessageView.render.bind(data.results[i]));
     }
    }
    if(!data.results){
      $("#chats").append(MessageView.render.bind(data));
    }
  }
};