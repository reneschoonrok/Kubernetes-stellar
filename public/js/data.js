function loaddata() {

  var xhttp = new XMLHttpRequest();

  xhttp.open('GET', '/getdata', true);
  //xhttp.open("GET", "http://localhost:8001/api/v1/namespaces/"+mynamespace+"/pods/", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

      //chattext.value= '';

 
      var response = JSON.parse(xhttp.responseText);
      var rows = response;
      var html = '<table id="mytable">';
      html += '<tr>';
      for( var j in rows[0] ) {
          html += '<th class="btn btn-sf">' + j + '</th>';
          html += '<td> &nbsp;&nbsp;|&nbsp;&nbsp; </td>';
      }
      html += '</tr>';
      for( var i = 0; i < rows.length; i++) {
          html += '<tr>';
          for( var j in rows[i] ) {
              html += '<td class="btn btn-sf2">' + rows[i][j] + '</td>';
              html += '<td> &nbsp;&nbsp;|&nbsp;&nbsp;</td>';
          }
          html += '</tr>';
      }
      html += '</table>';
      document.getElementById('container').innerHTML = html;

      //for (var i = response.length-1; i > -1 ;i--) {
         // chattext.value +=response[i];
         // chattext.value +="\r\n";
      //}


  }
};
}
