function loadinfo() {

  var xhttp = new XMLHttpRequest();
    //console.log(document.getElementById("selectnamespace").value);
    // var mynamespace2=document.getElementById("selectnamespace").value;
  xhttp.open('GET', '/pods?mynamespace='+mynamespace, true);
  //xhttp.open("GET", "http://localhost:8001/api/v1/namespaces/"+mynamespace+"/pods/", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

    var response = JSON.parse(xhttp.responseText);
    //console.log(response);
    var response1 = jsonPath(response , "$..spec.containers[0].name");
    var response2 = jsonPath(response , "$..status.phase");
    var response3 = jsonPath(response , "$..status.containerStatuses[0].restartCount");
    var response4 = jsonPath(response , "$..status.containerStatuses[0].ready");
    var response5 = jsonPath(response , "$..spec.containers[0].image");
    var response6 = jsonPath(response , "$..metadata.ownerReferences[0].kind");
    var response7 = jsonPath(response , "$..metadata.name");
    var response8 = jsonPath(response , "$..status.phase");
    //console.log(response7);

    var arrayLength = response1.length;
    var j = 0;
      podinfo.splice(0, podinfo.length);
    for (var i = 0; i < arrayLength; i++) {
        podinfo[j] = response1[i];
        podinfo[j+1] = "-Restarts: " + response3[i];
        podinfo[j+2] = response6[i]; //Job of ReplicaSet

        if (i < 6) {
          podinfo[j+3] = 5 + (i*3);
          podinfo[j+4] = 3 ; //rij links rechts
        } else{
          podinfo[j+3] = 5 + ((i-6)*3);
          podinfo[j+4] = 4 ; //rij links rechts
        }

        podinfo[j+5] = "-Ready: " + response4[i];
        podinfo[j+6] = "-Image: " + response5.length;
        //podinfo[j+7] = "-Started at: " + response6[i];
        podinfo[j+7] = "-Podstatus: " + response8[i];
        podinfo[j+8] = response7[i];
        j = j + 9;
    }
      const myNode = document.getElementById("myblock");
      while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild);

      }
      for ( var i = 0; i < podinfo.length; i += 9 ) {

          if ( podinfo[ i + 5 ] == "-Ready: true") {
              $('<div class="row items-push overflow-hidden">').appendTo('#myblock');
              $('<div class="tooltip"><span class="tooltiptext">'+podinfo[i+5]+'</span><img src="/img/podoksmall.gif" /> Scheduled').appendTo('#myblock');

              $('<button type="button" class="btn btn-xl btn-sf" onclick="selectPod(this.innerText)"></button>').text( podinfo[ i + 8]).appendTo('#myblock');

          } else {

              $('<div class="row items-push overflow-hidden">').appendTo('#myblock');
              if (podinfo[i+2]=='Job') {
                  $('<div class="tooltip"><span class="tooltiptext">' + podinfo[i + 5] + '</span><img src="/img/job.png" /> Scheduled').appendTo('#myblock');
                  $('<button type="button" class="btn btn-xl btn-sf" onclick="selectPod(this.innerText)"></button>').text( podinfo[ i + 8]).appendTo('#myblock');
              } else
              {
                  $('<div class="tooltip"><span class="tooltiptext">' + podinfo[i + 5] + '</span><img src="/img/infinite.gif" /> Scheduled').appendTo('#myblock');
                  $('<button type="button" class="btn btn-xl btn-sf-nok" onclick="selectPod(this.innerText)"></button>').text( podinfo[ i + 8]).appendTo('#myblock');
              }

          }

      }
      //if (podinfo.length > 8) {
      //    podnum.innerHTML = podinfo.length / 9
      //} else {
      //    podnum.innerHTML = 0
      //}
  }
};
}