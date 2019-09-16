var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function(room) {

    var cleanRoom = JSON.stringify(room)
    if(cleanRoom !== undefined){
    while(cleanRoom.includes('<')){
      cleanRoom = cleanRoom.replace('<', '')
    }}
    //console.log(room)
    $('#rooms select').append(`<option id = ${cleanRoom} value=${cleanRoom}>${cleanRoom}</option>`);
  },

  renderRoom: function(roomname){
    $('#rooms select').append(`<option value=${roomname}>${roomname}</option>`);
  }

};
