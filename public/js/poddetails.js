function loadpoddetails() {

    if (selecteditem != "") {

        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', '/poddetail?mynamespace=' + mynamespace + '&mypoddetail=' + selecteditem, true);
        //xhttp.open("GET", "http://localhost:8001/api/v1/namespaces/"+mynamespace+"/pods/"+event.currentTarget.childNodes[2].id, true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(xhttp.responseText);
                //console.log(response);
                //info[0] = jsonPath(response , "$..metadata.name");

                //var response5 = jsonPath(response , "$.spec.containers[*].image");

                // areatext1.value= '';
                podinfodetail1.innerHTML ='Podname         : ' + jsonPath(response , "$..metadata.name")+ "\r\n";
                podinfodetail4.innerHTML = 'Pod IP          : ' + jsonPath(response, "$..status.podIP") + "\r\n";
                // areatext1.value+='Podstatus       : ' + jsonPath(response , "$..status.phase")+ "\r\n";
                // areatext1.value+='Pod starttime   : ' + jsonPath(response , "$..status.startTime")+ "\r\n";
                podinfodetail3.innerHTML ='Images          : ' + jsonPath(response , "$..spec.containers[*].image")+ "\r\n";
                //podinfodetail2.innerHTML ='Containers #    : ' + response5.length+ "\r\n";
                podinfodetail2.innerHTML='Cont.restarts   : ' +  jsonPath(response ,"$..status.containerStatuses[*].restartCount")+ "\r\n";

                podinfodetail5.innerHTML = "";
                podinfodetail5f.innerHTML = "";
                podinfodetail6.innerHTML = "";
                podinfodetail6f.innerHTML = "";
                podinfodetail7.innerHTML = "";
                podinfodetail7f.innerHTML = "";
                podinfodetail8.innerHTML = "";
                podinfodetail8f.innerHTML = "";
                if (jsonPath(response , "$..status.conditions[0].status")=="True") {
                    podinfodetail5.innerHTML = jsonPath(response, "$..status.conditions[0].status") + "\r\n";
                } else {
                    podinfodetail5f.innerHTML = jsonPath(response, "$..status.conditions[0].status") + "\r\n";
                }

                if (jsonPath(response , "$..status.conditions[1].status")=="True") {
                    podinfodetail6.innerHTML = jsonPath(response, "$..status.conditions[1].status") + "\r\n";
                } else {
                    podinfodetail6f.innerHTML = jsonPath(response, "$..status.conditions[1].status") + "\r\n";
                }

                if (jsonPath(response , "$..status.conditions[2].status")=="True") {
                    podinfodetail7.innerHTML = jsonPath(response, "$..status.conditions[2].status") + "\r\n";
                } else {
                    podinfodetail7f.innerHTML = jsonPath(response, "$..status.conditions[2].status") + "\r\n";
                }

                if (jsonPath(response , "$..status.conditions[3].status")=="True") {
                    podinfodetail8.innerHTML = jsonPath(response, "$..status.conditions[3].status") + "\r\n";
                } else {
                    podinfodetail8f.innerHTML = jsonPath(response, "$..status.conditions[3].status") + "\r\n";
                }

                podinfodetailx5.innerHTML= jsonPath(response , "$..status.conditions[0].type")+"\r\n";
                podinfodetailx6.innerHTML= jsonPath(response , "$..status.conditions[1].type")+"\r\n";
                podinfodetailx7.innerHTML= jsonPath(response , "$..status.conditions[2].type")+"\r\n";
                podinfodetailx8.innerHTML= jsonPath(response , "$..status.conditions[3].type")+"\r\n";
                //areatext1.value+='Container ports : ' + jsonPath(response , "$..spec.containers[*].ports[0].containerPort")+ "\r\n";
                //areatext1.value+='cpu requests    : ' + jsonPath(response , "$..spec.containers[*].resources.requests.cpu")+ "\r\n";
                //areatext1.value+='memory requests : ' + jsonPath(response , "$..spec.containers[*].resources.requests.memory")+ "\r\n";
                //areatext1.value+='cpu limits      : ' + jsonPath(response , "$..spec.containers[*].resources.limits.cpu")+ "\r\n";
                //areatext1.value+='memory limits   : ' + jsonPath(response , "$..spec.containers[*].resources.limits.memory")+ "\r\n";


                //detail9.innerHTML = 'Pod starttime     : ' + jsonPath(response , "$.status.startTime");
                //detail12.innerHTML = jsonPath(response , "$.metadata.selfLink");
                //detail10.innerHTML = 'Open spec';
                //detail11.innerHTML = 'Delete pod';
                //detail13.innerHTML = '';
                //detail14.innerHTML = '';
            }
        }
    }
}

function loadlogdetails() {

    if (selecteditem != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', '/podlogs?mynamespace='+mynamespace+'&mypoddetail='+selecteditem+'&myauthtoken='+myauthtoken, true);
        //xhttp.open("GET", "http://localhost:8001/api/v1/namespaces/"+mynamespace+"/pods/"+event.target.children[2].id+"/log?tailLines=20", true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                areatext.value= '';
                var response = JSON.parse(xhttp.responseText);
                var responsestr = response.body.split("\n");
                for (var i = 0; i < responsestr.length; i++) {
                    areatext.value +=responsestr[i];
                    areatext.value +="\r\n";
                }

                //areatext.value += response
                areatext.scrollTop = areatext.scrollHeight;


            }
        }
    }
}






