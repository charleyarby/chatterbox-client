
var MessageView = {



  render: function(){
    var cleanText = JSON.stringify(this.text)
    if(cleanText !== undefined){
    while(cleanText.includes('<')){
      cleanText = cleanText.replace('<', '')
    }}
  return _.template(`

    <div class='chat'>
    <div class='username'> ${this.username}</div>
    <div class='text'> ${cleanText}</div>
    <div class='text'> ${this.roomname}</div>
      <div></div>
    </div>

    `)
  }
};
