function loadpoddetails() {

    if (selecteditem != "") {

        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', '/poddetail?mynamespace=' + mynamespace + '&mypoddetail=' + selecteditem, true);
        //xhttp.open("GET", "http://localhost:8001/api/v1/namespaces/"+mynamespace+"/pods/"+event.currentTarget.childNodes[2].id, true);

        //let res = await client.api.v1.namespaces('namespace_name').pods('pod_name').exec.post({
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(xhttp.responseText);

                podinfodetail1.innerHTML ='Podname         : ' + jsonPath(response , "$..metadata.name")+ "\r\n";
                podinfodetail4.innerHTML = 'Pod ip          : ' + jsonPath(response, "$..status.podIP") + ',    Node ip: ' + jsonPath(response , "$..status.hostIP")+ ',   Qos class: ' + jsonPath(response , "$..status.qosClass")+ "\r\n";
                podinfodetail3.innerHTML ='Images          : ' + jsonPath(response , "$..spec.containers[*].image")+ "\r\n";
                podinfodetail2.innerHTML='Container restarts   : ' +  jsonPath(response ,"$..status.containerStatuses[*].restartCount")+ ',   Start time: ' + jsonPath(response , "$..status.startTime")+ "\r\n";
                podinfodetail11.innerHTML='Container ports: ' +  jsonPath(response , "$..spec.containers[*].ports[*].containerPort")+ "\r\n";
                podinfodetail12.innerHTML='cpu request: ' + jsonPath(response , "$..spec.containers[0].resources.requests.cpu")+ "\r\n";
                podinfodetail13.innerHTML='mem request: ' + jsonPath(response , "$..spec.containers[0].resources.requests.memory")+ "\r\n";
                podinfodetail14.innerHTML='cpu limit: ' + jsonPath(response , "$..spec.containers[0].resources.limits.cpu")+ "\r\n";
                podinfodetail15.innerHTML='mem limit: ' + jsonPath(response , "$..spec.containers[0].resources.limits.memory")+ "\r\n";

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
                if (xhttp.responseText!= "") {
                    var response = JSON.parse(xhttp.responseText);
                    var responsestr = response.body.split("\n");
                    for (var i = 0; i < responsestr.length; i++) {
                        areatext.value += responsestr[i];
                        areatext.value += "\r\n";
                    }

                    //areatext.value += response
                    areatext.scrollTop = areatext.scrollHeight;
                }

            }
        }
    }
}

function deletePod() {

    if (selecteditem != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', '/deletepod?mynamespace='+mynamespace+'&mypoddetail='+selecteditem+'&myauthtoken='+myauthtoken, true);
        //xhttp.open("GET", "http://localhost:8001/api/v1/namespaces/"+mynamespace+"/pods/"+event.target.children[2].id+"/log?tailLines=20", true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                areatext.value= '';
                if (xhttp.responseText==""){selecteditem="";} //leeg dus leegmaken
                var response = JSON.parse(xhttp.responseText);
                //var responsestr = response.body.split("\n");

                    areatext.value = "pod deleted"


                //areatext.value += response
                areatext.scrollTop = areatext.scrollHeight;


            }
        }
    }
}






