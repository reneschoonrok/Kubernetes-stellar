function loadchat() {

  var xhttp = new XMLHttpRequest();

  xhttp.open('GET', '/chattext', true);
  //xhttp.open("GET", "http://localhost:8001/api/v1/namespaces/"+mynamespace+"/pods/", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

      chattext.value= '';

 
      var response = JSON.parse(xhttp.responseText);

      //for (var i = 0; i < response.length; i++) {
      //    chattext.value +=response[i];
      //    chattext.value +="\r\n";
      //}

      for (var i = response.length-1; i > -1 ;i--) {
          chattext.value +=response[i];
          chattext.value +="\r\n";
      }


  }
};
}

function addchatline() {


    var xhttp = new XMLHttpRequest();
    if (chatid.value == ""){
        var sendline = chatid.placeholder + ': ' + chatmsg.value;
    } else
    {
        var sendline = chatid.value + ': ' + chatmsg.value;
    }
    xhttp.open('GET', '/addchatline?chatline=' + sendline, true);
    //xhttp.open("GET", "http://localhost:8001/api/v1/namespaces/"+mynamespace+"/pods/"+event.target.children[2].id+"/log?tailLines=20", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //const mychatmsg = document.getElementById("chatmsg");
            chatmsg.value = '';

        }


    }
}