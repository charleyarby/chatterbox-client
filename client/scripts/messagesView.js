var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(data) {
    var uniqRoom={}
    var uniqRoomArray=[]
    console.log(data)
    if(data.results){
     for(var i=0; i<data.results.length; i++){
      $("#chats").append(MessageView.render.bind(data.results[i]));
      uniqRoom[data.results[i].roomname]=0;

     }
    }
    if(!data.results){
      $("#chats").append(MessageView.render.bind(data));
    }
    uniqRoomArray = Object.keys(uniqRoom);
    for(var i=0; i<uniqRoomArray.length; i++){
      RoomsView.render(uniqRoomArray[i])
    }

  }
};