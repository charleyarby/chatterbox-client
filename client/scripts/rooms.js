var Rooms = {
  add : function(){
  var person = prompt("Please enter your room name", "default");
  if(person !== null) {
  $('#rooms select').append(`<option value="${person}">"${person}"</option>`);
  }
}
}