function getURL(){
    return "http://158.38.101.146:8080/";
}


window.onload = function () {
    var param = location.search.split('mode=')[1];
 
    var landing = document.getElementById('landingDiv');
    var knuter = document.getElementById('knuteDiv');
    var brukere = document.getElementById('brukerDiv');
    var meldinger = document.getElementById('meldingerDiv');
    var registrerAdmin = document.getElementById('registrerAdminDiv');
    var rapporter = document.getElementById('rapporterDiv');
    var kontakt = document.getElementById('kontaktOssDiv');

    if(param == undefined){
        /*
        Dersom param er 'undefined' betyr dette at brukeren ikke
        har trykket på en knapp enda. Derfor vises framsiden 
        til administratorbrukeren
        */
        console.log("Normal mode");
        knuter.style.display = 'none';
        brukere.style.display = 'none';
        meldinger.style.display = 'none';
        registrerAdmin.style.display = 'none';
        rapporter.style.display = 'none';
        kontakt.style.display = 'none';
        landing.style.display = 'block';

        //$(brukere).hide();
        //$(knuter).hide();
    }else{
        if(param == 'knute'){
            /*
            Brukeren har trykket på 'KNUTER'
            */
            var knuteTom = document.getElementById('knuteInfoTom');
            var knuteInfo = document.getElementById('knuteInfo');
            var nyKnute = document.getElementById('nyKnuteInput');

            landing.style.display = 'none';
            brukere.style.display = 'none';
            meldinger.style.display = 'none';
            registrerAdmin.style.display = 'none';
            rapporter.style.display = 'none';
            kontakt.style.display = 'none';

            knuteInfo.style.display = 'none';
            nyKnute.style.display = 'none';
            knuteTom.style.display = 'block';

            knuter.style.display = 'block';
            console.log("knute");
            hentKnuter();
        }
        if(param == 'brukere'){
            /*
            Brukeren har trykket på 'BRUKERE'
            */
            landing.style.display = 'none';
            knuter.style.display = 'none';
            meldinger.style.display = 'none';
            registrerAdmin.style.display = 'none';
            rapporter.style.display = 'none';
            kontakt.style.display = 'none';
            brukere.style.display = 'block';
            console.log("brukere");
            hentBrukere();
        }

        if(param == 'meldinger'){
            /*
            Brukeren har trykket på 'MELDINGER'
            */
            landing.style.display = 'none';
            knuter.style.display = 'none';
            brukere.style.display = 'none';
            registrerAdmin.style.display = 'none';
            rapporter.style.display = 'none';
            kontakt.style.display = 'none';
            meldinger.style.display = 'block';
            console.log("meldinger");
            hentMeldinger();
        }

        if(param == 'registrerAdmin'){
            /*
            Brukeren har trykket på 'REGISTRER ADMIN'
            */
            landing.style.display = 'none';
            knuter.style.display = 'none';
            meldinger.style.display = 'none';
            brukere.style.display = 'none';
            rapporter.style.display = 'none';
            kontakt.style.display = 'none';
            registrerAdmin.style.display = 'block';
            console.log("registrer admin");
        }

        if(param == 'rapporterFeil'){
            /*
            Brukeren har trykket på 'RAPPORTER PROBLEM'
            */
            landing.style.display = 'none';
            knuter.style.display = 'none';
            meldinger.style.display = 'none';
            brukere.style.display = 'none';
            registrerAdmin.style.display = 'none';
            kontakt.style.display = 'none';
            rapporter.style.display = 'block';
            console.log("rapporter");
        }

        if(param == 'kontaktOss'){
            /*
            Brukeren har trykket på 'KONTAKT OSS'
            */
            landing.style.display = 'none';
            knuter.style.display = 'none';
            meldinger.style.display = 'none';
            brukere.style.display = 'none';
            rapporter.style.display = 'none';
            registrerAdmin.style.display = 'none';
            kontakt.style.display = 'block';
            console.log("kontakt");
        }

        
    }
    
}

function hentKnuter(){
    console.log("KNUTER have been clicked!");
    var url = "http://158.38.101.146:8080/knots?russId=1";
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);
        //console.log(responseAsJSON.length);
        var knuter = document.getElementById('knuter');
        for(i = 0; i < responseAsJSON.length; i++){
            //må ha: knuteID og knuteNavn
            var knuteId = responseAsJSON[i].knotId;
            var knuteNavn = responseAsJSON[i].knotName;


            var newKnuteLink = document.createElement('a');
            newKnuteLink.setAttribute("href", "#");
            newKnuteLink.setAttribute("onClick", "visKnute('"+knuteId+"'); return false;");  
            var newKnuteElement = document.createElement('p');
            newKnuteElement.innerText = (i+1)+" - "+knuteNavn;
            //console.log(newKnuteElement);
            newKnuteLink.appendChild(newKnuteElement);
            knuter.appendChild(newKnuteLink);
        }



    });


}

function visKnute(id){
    //console.log("KnuteID: " + id);

    var knuteTom = document.getElementById('knuteInfoTom');
    var knuteInfo = document.getElementById('knuteInfo');
    var nyKnute = document.getElementById('nyKnuteInput');

    nyKnute.style.display = 'none';
    knuteTom.style.display = 'none';
    knuteInfo.style.display = 'block';
    //document.getElementsByClassName
    var showKnotInfo = document.getElementById('showKnotInfo');
    showKnotInfo.innerHTML = "";

    var url = "http://158.38.101.146:8080/getKnot?knotId="+id;
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);
        //console.log(responseAsJSON);
        // var newKnuteElement = document.createElement('p');
        var knotId = document.createElement('p'); 
        knotId.innerHTML = "KNUTE-ID:" + responseAsJSON.knotId;
        var knotName = document.createElement('p');
        knotName.innerHTML = "KNUTENAVN: " + responseAsJSON.knotName;
        var knotDetails = document.createElement('p');
        knotDetails.innerHTML = "KNUTEDETALJER: " + responseAsJSON.knotDetails;
        var knotPicture = document.createElement('p');
        knotPicture.innerHTML = "KNUTEBILDE: " + responseAsJSON.knotPicture;
        var schoolId = document.createElement('p');
        schoolId.innerHTML = "SKOLE-ID: " + responseAsJSON.schoolId.schoolId;
        var schoolName = document.createElement('p'); 
        schoolName.innerHTML = "SKOLENAVN: " + responseAsJSON.schoolId.schoolName;
        var schoolStatus = document.createElement('p');
        schoolStatus.innerHTML = "SKOLESTATUS: " + responseAsJSON.schoolId.schoolStatus;
        var schoolLocation = document.createElement('p'); 
        schoolLocation.innerHTML = "KOMMUNE: " + responseAsJSON.schoolId.schoolLocation;
        var schoolMunicipality = document.createElement('p'); 
        schoolMunicipality.innerHTML = "FYLKE: " + responseAsJSON.schoolId.schoolMunicipality;
        var schoolLongitude = document.createElement('p'); 
        schoolLongitude.innerHTML = "LENGDEGRAD: " + responseAsJSON.schoolId.schoolLongitude;
        var schoolLatitude = document.createElement('p');
        schoolLatitude.innerHTML = "BREDDEGRAD: " + responseAsJSON.schoolId.schoolLatitude;
        //console.log(knotId+" "+knotName+" "+knotDetails+" "+knotPicture);
        //console.log(schoolId+" "+schoolName+" "+schoolStatus+" "+schoolLocation+" "+schoolMunicipality+" "+schoolLongitude+" "+schoolLatitude);
        showKnotInfo.appendChild(knotId);
        showKnotInfo.appendChild(knotName);
        showKnotInfo.appendChild(knotDetails);
        showKnotInfo.appendChild(knotPicture);
        showKnotInfo.appendChild(schoolId);
        showKnotInfo.appendChild(schoolName);
        showKnotInfo.appendChild(schoolStatus);
        showKnotInfo.appendChild(schoolLocation);
        showKnotInfo.appendChild(schoolMunicipality);
        showKnotInfo.appendChild(schoolLongitude);
        showKnotInfo.appendChild(schoolLatitude);
    });

}

function nyKnute(){
    console.log("NY KNUTE");

    var knuteTom = document.getElementById('knuteInfoTom');
    var knuteInfo = document.getElementById('knuteInfo');
    var nyKnute = document.getElementById('nyKnuteInput');

    knuteInfo.style.display = 'none';
    knuteTom.style.display = 'none';
    nyKnute.style.display = 'block';

    
}



function registrerKnute(){
    console.log("registrer knute");

    var knuteNavn = document.getElementById('knuteNavn').value;
    var knuteBeskrivelse = document.getElementById('knuteBeskrivelse').value;
    console.log(knuteNavn + " " + knuteBeskrivelse);

    var knuter = document.getElementById('knuter');
    var newKnuteLink = document.createElement('a');
    newKnuteLink.setAttribute("href", "#");
    newKnuteLink.setAttribute("onClick", "visKnute('"+knuteBeskrivelse+"'); return false;");  
    var newKnuteElement = document.createElement('p');
    newKnuteElement.innerText = knuteNavn;
    console.log(newKnuteElement);
    newKnuteLink.appendChild(newKnuteElement);
    knuter.appendChild(newKnuteLink);


    var knuteTom = document.getElementById('knuteInfoTom');
    var nyKnute = document.getElementById('nyKnuteInput');
    //var nyKnute = document.getElementById('nyKnuteInput');

    nyKnute.style.display = 'none';
    knuteTom.style.display = 'block';
}

function hentBrukere(){
    console.log("BRUKERE have been clicked");
}

function commitChanges(){
    console.log("changes will be committed!");
    window.location.href = "admin.php?mode=knute";
}

function cancel(){
    console.log("canceling the operation");
    //window.location.href = "admin.php?mode=knute";
    var knuteTom = document.getElementById('knuteInfoTom');
    var knuteInfo = document.getElementById('knuteInfo');
    //var nyKnute = document.getElementById('nyKnuteInput');

    knuteInfo.style.display = 'none';
    knuteTom.style.display = 'block';
    //nyKnute.style.display = 'block';
}

function cancelNyKnute(){
    console.log("canceling the operation");
    //window.location.href = "admin.php?mode=knute";
    var knuteTom = document.getElementById('knuteInfoTom');
    var nyKnuteInput = document.getElementById('nyKnuteInput');
    //var nyKnute = document.getElementById('nyKnuteInput');
    nyKnuteInput.style.display = 'none';
    knuteTom.style.display = 'block';
    //nyKnute.style.display = 'block';
}


function hentMeldinger(){
    console.log("MELDINGER have been clicked");
}


var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}

