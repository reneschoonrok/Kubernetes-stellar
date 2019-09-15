function loadevents() {
  var xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/myevents?mynamespace='+mynamespace, true);
  //xhttp.open("GET", "http://localhost:8001/api/v1/namespaces/"+mynamespace+"/events/", true);

  //http://localhost:8001/api/v1/namespaces/default/events?limit=5

  xhttp.send();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

    var response = JSON.parse(xhttp.responseText);
    //console.log(response);
    var response2 = jsonPath(response , "$..items[*].metadata.name");
    var response1 = jsonPath(response , "$..items[*].lastTimestamp");
    var response3 = jsonPath(response , "$..items[*].message");
    var response4 = jsonPath(response , "$..items[*].reason");
    var response5 = jsonPath(response , " ");
    var response6 = jsonPath(response , " ");
    var response7 = jsonPath(response , " ");
    var response8 = jsonPath(response , " ");
    //console.log(response7);

    var arrayLength = response1.length;
    var j = 0;
    eventinfo.splice(0, eventinfo.length)
    for (var i = 0; i < arrayLength; i++) {
        eventinfo[j] = response1[i];
        eventinfo[j+1] = response4[i]+': ' + response3[i];
        eventinfo[j+2] = "rgba(67, 114,183,0.2)"; //background of replicasets
        eventinfo[j+5] = response2[i];
        eventinfo[j+6] = "-Image: " + response5[i];
        //replicaset[j+7] = "-Started at: " + response6[i];
        eventinfo[j+7] = response4[i];
        eventinfo[j+8] = response7[i];
        j = j + 9;
    }
      var currentTime = new Date();
      //currentTime = currentTime.getTime() -  currentTime.getTime() / 1000;git
      currentTime = (currentTime.getTime()-86000);
      var teller = 0;

      const myNode = document.getElementById("myeventblock");
      while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild);
      }



      //eventnum.innerHTML = 0
      for ( var i = 0; i < eventinfo.length; i += 9 ) {


          if (currentTime > new Date(eventinfo[i])) {
              //console.log("skipping")
          } else {

              if (eventinfo[ i + 7 ] =='Killing') {
                  $('<div class="tooltip"><span class="tooltiptext">'+eventinfo[i + 1]+'</span><img src="/img/killed.png" /> Scheduled').appendTo('#myeventblock');
              }

              if (eventinfo[ i + 7 ] =='Pulled') {
                  $('<div class="tooltip"><span class="tooltiptext">'+eventinfo[i + 1]+'</span><img src="/img/pulled.png" /> Scheduled').appendTo('#myeventblock');
              }

              if (eventinfo[ i + 7 ] =='Pulling') {
                  $('<div class="tooltip"><span class="tooltiptext">'+eventinfo[i + 1]+'</span><img src="/img/pulling.png" /> Scheduled').appendTo('#myeventblock');
              }

              if (eventinfo[ i + 7 ] =='Created') {
                  $('<div class="tooltip"><span class="tooltiptext">'+eventinfo[i + 1]+'</span><img src="/img/created.png" /> Scheduled').appendTo('#myeventblock');
              }

              if (eventinfo[ i + 7 ] =='Started') {
                  $('<div class="tooltip"><span class="tooltiptext">'+eventinfo[i + 1]+'</span><img src="/img/started.png" /> Scheduled').appendTo('#myeventblock');
              }

              if (eventinfo[ i + 7 ] =='Failed') {
                  $('<div class="tooltip"><span class="tooltiptext">'+eventinfo[i + 1]+'</span><img src="/img/failed.png" /> Scheduled').appendTo('#myeventblock');
              }

              if (eventinfo[ i + 7 ] =='Unhealthy') {
                  $('<div class="tooltip"><span class="tooltiptext">'+eventinfo[i + 1]+'</span><img src="/img/failed2.png" /> Scheduled').appendTo('#myeventblock');
              }

              if (eventinfo[ i + 7 ] =='Scheduled') {
                  $('<div class="tooltip"><span class="tooltiptext">'+eventinfo[i + 1]+'</span><img src="/img/scheduled.png" /> Scheduled').appendTo('#myeventblock');
              }

              if (eventinfo[ i + 7 ] =='SuccessfulCreate') {
                  $('<div class="tooltip"><span class="tooltiptext">'+eventinfo[i + 1]+'</span><img src="/img/succesful.png" /> Scheduled').appendTo('#myeventblock');
              }

          }
      }
  }
};




}