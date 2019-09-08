function loaddeployments() {
   var xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/deployments?mynamespace='+mynamespace, true);
   //xhttp.open("GET", "http://localhost:8001/apis/apps/v1/namespaces/"+mynamespace+"/deployments/", true);
   xhttp.send();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

         var response = JSON.parse(xhttp.responseText);
         //console.log(response);
         var response1 = jsonPath(response , "$..items[*].metadata.name");
         var response2 = jsonPath(response , "$..items[*].spec.replicas");
         var response3 = jsonPath(response , "$..items[*].status.readyReplicas");
         var response4 = jsonPath(response , "$..items[*].metadata.generation");
         var response5 = jsonPath(response , " ");
         var response6 = jsonPath(response , " ");
         var response7 = jsonPath(response , " ");
         var response8 = jsonPath(response , " ");
         var arrayLength = response1.length;
         var j = 0;
         for (var i = 0; i < arrayLength; i++) {
            deployment[j] = response1[i];
            deployment[j+1] = response2[i];
            deployment[j+2] = response3[i];
            deployment[j+3] = response4[i];
            deployment[j+4] = 3 ; //rij links rechts
            deployment[j+5] = "-Ready: " + response4[i];
            deployment[j+6] = "-Image: " + response5[i];
            //deployment[j+7] = "-Started at: " + response6[i];
            deployment[j+7] = " ";
            deployment[j+8] = response7[i];
            j = j + 9;
         }
          const myNode = document.getElementById("mydeploymentsblock");
          while (myNode.firstChild) {
              myNode.removeChild(myNode.firstChild);
          }

          

          for ( var i = 0; i < deployment.length; i += 9 ) {

              $('<div class="row items-push overflow-hidden">').appendTo('#mydeploymentsblock');
              $('<div class="tooltip"><span class="tooltiptext">'+deployment[i]+'</span><img src="/img/helm1.jpg" /> Scheduled').appendTo('#mydeploymentsblock');


              $(' <span class="font-s16 font-w600"></span></div></div>').text( ' '+deployment[ i + 1] +'/'+ deployment[ i + 2]+ ' '+deployment[ i ] + ' revision: '+deployment[ i + 3 ]).appendTo('#mydeploymentsblock');


          }
      }
   };



}