
var MessageView = {



  render: function(){

    var cleanText = JSON.stringify(this.text)
    if(cleanText !== undefined){
    while(cleanText.includes('<')){
      cleanText = cleanText.replace('<', '')
    }}

    var cleanRoom = JSON.stringify(this.roomname)
    if(cleanRoom !== undefined){
    while(cleanRoom.includes('<')){
      cleanRoom = cleanRoom.replace('<', '')
    }}

    var cleanUser = JSON.stringify(this.username)
    if(cleanUser !== undefined){
    while(cleanUser.includes('<')){
      cleanUser = cleanUser.replace('<', '')
    }}


  return _.template(`

    <div class='chat'>
    <button class='username' onclick="Friends.toggleStatus()">  ${cleanUser}</button>
    <div class='text'> ${cleanText}</div>
    <div class='room'> ${cleanRoom}</div>
      <div></div>
    </div>

    `)
  }
};

//<button onclick="myFunction()">Click me</button>