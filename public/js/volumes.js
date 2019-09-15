function loadpvc() { //http://localhost:8001/apis/extensions/v1beta1/namespaces/dev/ingresses/
  var xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/mypvc?mynamespace='+mynamespace, true);
  //xhttp.open("GET", "http://localhost:8001/apis/extensions/v1beta1/namespaces/"+mynamespace+"/ingresses/", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

    var response = JSON.parse(xhttp.responseText);
    //console.log(response);
    var response1 = jsonPath(response , "$..items[*].metadata.name");
    var response2 = jsonPath(response , "$..items[*].spec.accessModes[0]");
    ingressurls = jsonPath(response , "$..items[*].spec.rules[0].host");
    var response3 = jsonPath(response , " ");
    var response4 = jsonPath(response , " ");
    var response5 = jsonPath(response , " ");
    var response6 = jsonPath(response , " ");
    var response7 = jsonPath(response , " ");
    var response8 = jsonPath(response , " ");
    //console.log(response7);

    var arrayLength = response1.length;
    var j = 0;
    pvcinfo.splice(0, pvcinfo.length)
    for (var i = 0; i < arrayLength; i++) {
        pvcinfo[j] = response1[i];
        pvcinfo[j+1] = response2[i];
        pvcinfo[j+2] = "rgba(237, 149, 61,0.2)"; //background of ingressinfos


        pvcinfo[j+3] = 5 + (i*3);
        pvcinfo[j+4] = 5 ; //rij links rechts


        pvcinfo[j+5] = " " ;
        pvcinfo[j+6] = "-Image: " + response5[i];
        //pvcinfo[j+7] = "-Started at: " + response6[i];
        pvcinfo[j+7] = " ";
        pvcinfo[j+8] = response7[i];
        j = j + 9;
    }
      const myNode = document.getElementById("myvolumesblock");
      while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild);
      }


      //if (pvcinfo.length > 8) {
      //    volumesnum.innerHTML = pvcinfo.length / 9
      //} else {
      //    volumesnum.innerHTML = 0
      //}

      for ( var i = 0; i < pvcinfo.length; i += 9 ) {

          $('<div class="row items-push overflow-hidden">').appendTo('#myvolumesblock');
          $('<div class="tooltip"><span class="tooltiptext">'+pvcinfo[i + 1]+'</span><img src="/img/pvcslow.gif" /> Scheduled').appendTo('#myvolumesblock');


          $(' <span class="font-s16 font-w600"></span></div></div>').text( pvcinfo[ i ]).appendTo('#myvolumesblock');


      }
  }
};



}