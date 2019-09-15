function loadingresses() { //http://localhost:8001/apis/extensions/v1beta1/namespaces/dev/ingresses/
  var xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/getingress?mynamespace='+mynamespace, true);
  //xhttp.open("GET", "http://localhost:8001/apis/extensions/v1beta1/namespaces/"+mynamespace+"/ingresses/", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

    var response = JSON.parse(xhttp.responseText);
    //console.log(response);
    var response1 = jsonPath(response , "$..items[*].metadata.name");
    var response2 = jsonPath(response , "$..items[*].spec.rules[0].host");
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
    ingressinfo.splice(0, ingressinfo.length)
    for (var i = 0; i < arrayLength; i++) {
        ingressinfo[j] = response1[i];

        const myhttps = document.getElementById("https-ingress");
        if (myhttps.checked==true) {
            ingressinfo[j+1] = 'https://'+response2[i];
        } else {
            ingressinfo[j+1] = 'http://'+response2[i];
        };

        ingressinfo[j+2] = "rgba(237, 149, 61,0.2)"; //background of ingressinfos


        ingressinfo[j+3] = 5 + (i*3);
        ingressinfo[j+4] = 5 ; //rij links rechts


        ingressinfo[j+5] = " " ;
        ingressinfo[j+6] = "-Image: " + response5[i];
        //ingressinfo[j+7] = "-Started at: " + response6[i];
        ingressinfo[j+7] = " ";
        ingressinfo[j+8] = response7[i];
        j = j + 9;
    }

      //if (ingressinfo.length > 8) {
       //   ingressnum.innerHTML = ingressinfo.length / 9
      //} else {
      //    ingressnum.innerHTML = 0
      //}

      const myNode = document.getElementById("myingressblock");
      while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild);
      }

      for ( var i = 0; i < ingressinfo.length; i += 9 ) {

          $('<div class="row items-push overflow-hidden">').appendTo('#myingressblock');
          $('<div class="tooltip"><span class="tooltiptext">'+ingressinfo[i]+'</span><img src="/img/ingressslow.gif" /> Scheduled').appendTo('#myingressblock');

          $(' <span class="font-s14 font-w400" onclick="window.open(this.innerText)"></span></div></div>').text( ingressinfo[ i + 1]).appendTo('#myingressblock');

      }
  }
};
}