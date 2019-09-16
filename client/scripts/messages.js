var Messages = function () {
  var inputVal = document.getElementById("message").value;
  //var roomName= document.getElementById().value;
  var user = this.window.location.search.substr(10);
  return {
    username: user,
    text: inputVal,
    roomname: '4chan'
  }
};