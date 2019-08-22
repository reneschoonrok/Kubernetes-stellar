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
    for (var i = 0; i < arrayLength; i++) {
        pvcinfo[j] = response1[i];
        pvcinfo[j+1] = "-Url: " + response2[i];
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
    //console.log(ingressinfo);
  }
};

    const myNode = document.getElementById("myvolumesblock");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }


    if (pvcinfo.length > 8) {
        volumesnum.innerHTML = pvcinfo.length / 9
    } else {
        volumesnum.innerHTML = 0
    }

    for ( var i = 0; i < pvcinfo.length; i += 9 ) {

        var element = document.createElement( 'div' );
        element.className = 'element';
        element.style.backgroundColor = pvcinfo[ i + 2 ];




        var number = document.createElement( 'div' );
        number.textContent = pvcinfo[ i + 5 ];
        if ( number.textContent == "-Ready: false") { number.className = 'numberbad';};
        if ( number.textContent == "-Ready: ") { number.className = 'numbergood';};
        if ( number.textContent == "-Ready: true") { number.className = 'numberbest';}
        element.appendChild( number );


        var symbol = document.createElement( 'div' );
        symbol.className = 'symbol';
        symbol.textContent = pvcinfo[ i ];
        element.appendChild( symbol );

        var details = document.createElement( 'div' );
        details.className = 'restarts';
        var ingressname = document.createElement('ingressname'); // is a node

        details.appendChild(ingressname)

        var myingressrow = document.createElement('myingressrow'); // is a node
        myingressrow.align = pvcinfo[ i + 3 ];
        details.appendChild(myingressrow)

        var myingresscolumn = document.createElement('myingresscolumn'); // is a node
        myingresscolumn.align = pvcinfo[ i + 4 ];
        details.appendChild(myingresscolumn)

        var imageid = document.createElement('imageid'); // is a node
        imageid.align = pvcinfo[ i + 6 ];
        details.appendChild(imageid)

        var startedat = document.createElement('startedat'); // is a node
        startedat.align = pvcinfo[ i + 7 ];
        details.appendChild(startedat)

        var xpos = document.createElement('xpos'); // is a node
        xpos.align = ( pvcinfo[ i + 3 ] * 140 ) - 1230;
        details.appendChild(xpos)

        var ingressreplicaname = document.createElement('ingressreplicaname'); // is a node
        ingressreplicaname.align = pvcinfo[ i + 8 ];
        details.appendChild(ingressreplicaname)

        details.className = 'ingressdetails';
        details.innerHTML = pvcinfo[ i + 1 ];
        details.align = pvcinfo[ i + 6 ];
        details.title = pvcinfo[ i + 7 ];
        details.id = pvcinfo[ i + 8 ];
        details.tabIndex = ( pvcinfo[ i + 3 ] * 140 ) - 1230;
        element.appendChild( details );

        var deletebtn = document.createElement( 'div' );
        deletebtn.textContent = "Select";
        deletebtn.className = 'delete';
        element.appendChild( deletebtn );

        var ingressstatus = document.createElement( 'div' );
        ingressstatus.textContent = pvcinfo[ i + 7 ];
        ingressstatus.className = 'ingressbad';
        if ( ingressstatus.textContent == "-ingressstatus: Running") { ingressstatus.className = 'ingressgood';};
        element.appendChild( ingressstatus );
            //$('<div class="tooltip"><span class="tooltiptext">'+podinfo[i + 1]+'</span><img src="/img/small.jpg" />').appendTo('#myblock');


        $('<div class="row items-push overflow-hidden">').appendTo('#myvolumesblock');
        $('<div class="tooltip"><span class="tooltiptext">'+pvcinfo[i + 1]+'</span><img src="/img/pvcslow.gif" /> Scheduled').appendTo('#myvolumesblock');


        $(' <span class="font-s16 font-w600"></span></div></div>').text( pvcinfo[ i ]).appendTo('#myvolumesblock');

    















    }

}