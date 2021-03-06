token = "";

function getURL(){
    return "http://158.38.101.146:8080/";
}

/*
CHECK FOR COOKIES
-> REDIRECT TO FRONT PAGE IF COOKIE EXISTS = USER ALREADY LOGGED IN
-> ASK FOR LOGIN IF COOKIE !EXISTS
*/
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function logoutRussesamfunnet(){
    setCookie("Russesamfunnet", "", -10)
    setCookie("Russesamfunnet-token", "", -10);
    setTimeout(function(){
        window.location.href = "index.php";
    },1500);
}

/*
WE NEED TO CHECK IF A USER IS AN ADMIN/SYS.ADMIN BEFORE WE LOAD THE ADMIN PAGE FOR THE USER
ID THE USER IS NOT AN ADMIN REDIRECT THEM

WE ALSO NEED TO MAKE THE ADMIN MENU ITEM ONLY VISIBLE TO ADMINS
*/
window.onload = function () {
    /***************************************** ADMIN CHECK HERE ******************************************************/

    var cookie = getCookie("Russesamfunnet");
    if (cookie == null) {
        facebookInit();
        try {
            logoutNoRedirect();
        } catch (error) {
            console.log("FacebookError: " + error);
        } 
        redirectUser();
        /*USER MUST BE REDIRECTED TO LOGIN AND SESSION WITH
          GOOGLE/FACEBOOK/RUSSESAMFUNNET MUST BE ENDED*/
    }
    else if (cookie != null) {
        //console.log("HELLO THIS IS THE ONLOAD IN ADMINSCRIPT.JS");
        if (cookie == "facebook") {
            facebookInit();
            setupSite();
            
        }
        if (cookie == "russesamfunnet") {
            //console.log(cookie);
            //console.log(getCookie("Russesamfunnet-token"));
            setupSite();
        }
        //getInfoForPage();
    }
    else {
        //console.log("ELSE...HOW?");
    }
}

function setupSite(){
    var param = location.search.split('mode=')[1];
 
    var landing = document.getElementById('landingDiv');
    var knuter = document.getElementById('knuteDiv');
    var brukere = document.getElementById('brukerDiv');
    var bekreftBrukere = document.getElementById('bekreftBrukerDiv');
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
        bekreftBrukere.style.display = 'none';
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
            bekreftBrukere.style.display = 'none';
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
            bekreftBrukere.style.display = 'none';
            meldinger.style.display = 'none';
            registrerAdmin.style.display = 'none';
            rapporter.style.display = 'none';
            kontakt.style.display = 'none';
            brukere.style.display = 'block';
            console.log("brukere");
            hentBrukere();
        }

        if(param == 'bekreftBruker'){
            /*
            Brukeren har trykket på 'BRUKERE'
            */
            landing.style.display = 'none';
            knuter.style.display = 'none';
            meldinger.style.display = 'none';
            registrerAdmin.style.display = 'none';
            rapporter.style.display = 'none';
            kontakt.style.display = 'none';
            brukere.style.display = 'none';
            bekreftBrukere.style.display = 'block';
            console.log("bekreftBruker");
            hentUbekreftedeBrukere();
        }

        if(param == 'meldinger'){
            /*
            Brukeren har trykket på 'MELDINGER'
            */
            landing.style.display = 'none';
            knuter.style.display = 'none';
            brukere.style.display = 'none';
            bekreftBrukere.style.display = 'none';
            registrerAdmin.style.display = 'none';
            rapporter.style.display = 'none';
            kontakt.style.display = 'none';
            meldinger.style.display = 'block';
            console.log("meldinger");
            getFeed();
        }

        if(param == 'registrerAdmin'){
            /*
            Brukeren har trykket på 'REGISTRER ADMIN'
            */
            landing.style.display = 'none';
            knuter.style.display = 'none';
            meldinger.style.display = 'none';
            brukere.style.display = 'none';
            bekreftBrukere.style.display = 'none';
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
            bekreftBrukere.style.display = 'none';
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
            bekreftBrukere.style.display = 'none';
            rapporter.style.display = 'none';
            registrerAdmin.style.display = 'none';
            kontakt.style.display = 'block';
            console.log("kontakt");
        }

        
    }
    
}

function utførHentKnuter(type, accessToken) {
    //var type = getCookie("Russesamfunnet");
/*
    if (type == 'facebook') {
        var accessToken = token;
        console.log("token: " + token);
        console.log("type == facebook " + accessToken);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        console.log("type == russesamfunnet " + accessToken);
    }
*/
    //var accessToken = getCookie("Russesamfunnet-token");
    //var type = "russesamfunnet";
    var url = "http://158.38.101.146:8080/knots?accessToken=" + accessToken + "&type=" + type;
    console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);
        //console.log(responseAsJSON.length);
        var knuter = document.getElementById('knuter');
        document.getElementById('knuter').innerHTML = "";
        for (i = 0; i < responseAsJSON.length; i++) {
            //må ha: knuteID og knuteNavn
            var knuterDiv = document.createElement('div');
            knuterDiv.setAttribute("class", "knuterDiv");
            var knuteId = responseAsJSON[i].knotId;
            var knuteNavn = responseAsJSON[i].knotName;
            var newKnuteLink = document.createElement('a');
            //newKnuteLink.setAttribute("style", "background: black;");
            newKnuteLink.setAttribute("href", "#");
            //console.log(knuteId + type + accessToken);
            newKnuteLink.setAttribute("onClick", "visKnute('" + knuteId + "','" + type + "','" + accessToken + "'); return false;");
            var newKnuteElement = document.createElement('p');
            //newKnuteElement.setAttribute("style", "border-bottom: 1px solid black;");
            newKnuteElement.innerText = (i + 1) + " - " + knuteNavn;
            //console.log(newKnuteElement);
            newKnuteLink.appendChild(newKnuteElement);
            knuterDiv.appendChild(newKnuteLink);
            knuter.appendChild(knuterDiv);
        }
    });
}

function hentKnuter() {
    console.log("KNUTER have been clicked! ");
    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            utførHentKnuter(type, token);
        }, 1000);
    } else if(type == 'russesamfunnet'){
        var accessToken = getCookie("Russesamfunnet-token");
        utførHentKnuter(type, accessToken);
    }
}

function visKnute(id, type, accessToken){
    //console.log("KnuteID: " + id + ", type == " + type + ", " + accessToken);
    //console.log("Hello? " + type);
    var knuteTom = document.getElementById('knuteInfoTom');
    var knuteInfo = document.getElementById('knuteInfo');
    var nyKnute = document.getElementById('nyKnuteInput');
    //var deletKnotButton = document.getElementById('deleteKnotButton');
    document.getElementById('deleteKnotButton').setAttribute("onclick", "slettKnute('" + id + "','" + type + "','" + accessToken + "'); return false;");

    nyKnute.style.display = 'none';
    knuteTom.style.display = 'none';
    knuteInfo.style.display = 'block';
    //document.getElementsByClassName
    var showKnotInfo = document.getElementById('showKnotInfo');
    showKnotInfo.innerHTML = "";

    //var accessToken = getCookie("Russesamfunnet-token");
    //var type = "russesamfunnet";

    var url = "http://158.38.101.146:8080/getKnot?knotId="+id;
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);

        var knotId = document.createElement('p'); 

        var editForm = document.createElement('form');
        editForm.innerHTML = `
        <br><form name="nyRusseKnute" onSubmit="commitChanges(); return false;">
            <input type="hidden" id="knotIdInfo" value="`+responseAsJSON.knotId+`" name="knotId" />
            Navn på knuten:
            <input type="text" id="knuteNavnInfo" name="knuteNavn" value="`+responseAsJSON.knotName+`"/><br><br>
            Beskrivelse av knuten:
            <textarea id="knuteBeskrivelseInfo">`+responseAsJSON.knotDetails+`</textarea>
        </form>
        `;
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
        showKnotInfo.appendChild(editForm);
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

function slettKnute(id, type, accessToken){
    //console.log("knot to delete: " + id);
    var confirm = window.confirm("are you sure?");
    //console.log("confirm or not! " + confirm);
    if(confirm){
        //console.log("Deleted");
        //var accessToken = getCookie("Russesamfunnet-token");
        //var type = "russesamfunnet";
        var url = "http://158.38.101.146:8080/deleteKnot?accessToken="+accessToken+"&type="+type+"&knotId="+id;
        var client = new HttpClient();
        client.get(url, function (response) {
            //console.log(response);
            if(response == 'Knot successfully deleted.'){
                console.log("I redirect metoden!");
                setTimeout(function () {
                    var knuteTom = document.getElementById('knuteInfoTom');
                    var knuteInfo = document.getElementById('knuteInfo');
                    
                    knuteInfo.style.display = 'none';
                    knuteTom.style.display = 'block';
                    
                    hentKnuter();
                    //window.location.href = 'admin.php?mode=knute';
                }, 700);
                
                //window.location.href = 'admin.php?mode=knute';
                //knuteRedirect();
            }else{
                console.log("Error");
                setTimeout(function () {
                    window.location.href = 'admin.php?mode=knute';
                }, 700);
            }
            //var responseAsJSON = JSON.parse(response);
            //console.log(responseAsJSON);


        });
    }else{
        console.log("Not deleted");
    }
}

function knuteRedirect() {
    //console.log("I redirect metoden!");
    setTimeout(function () {
        location.reload();
    }, 800);
}

function registrerKnute() {
    console.log("registrer knute");

    var knuteNavn = document.getElementById('knuteNavn').value;
    var knuteBeskrivelse = document.getElementById('knuteBeskrivelse').value;
    //var accessToken = getCookie("Russesamfunnet-token");
    //var type = "russesamfunnet";
    //console.log(accessToken + ", " + knuteNavn + ", " + knuteBeskrivelse);

    document.getElementById('knuteNavn').value = "";
    document.getElementById('knuteBeskrivelse').value = "";


    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            UtførRegistrerKnute(type, token, knuteNavn, knuteBeskrivelse);
        }, 700);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        UtførRegistrerKnute(type, accessToken, knuteNavn, knuteBeskrivelse);
    }
}



function UtførRegistrerKnute(type, accessToken, knuteNavn, knuteBeskrivelse){
    //console.log("Utfører registerering av knute");
    //console.log(type + accessToken + knuteNavn + knuteBeskrivelse);
    var url = "http://158.38.101.146:8080/addKnot?accessToken="+accessToken+"&type="+type+"&knotName="+knuteNavn+"&knotDescription="+knuteBeskrivelse;
    var client = new HttpClient();
    client.get(url, function (response) {
        console.log(response);
        var responseAsJSON = JSON.parse(response);
        //console.log(responseAsJSON);
        var knuter = document.getElementById('knuter');
        var antall = knuter.getElementsByTagName('a').length;
        //console.log(antall);
        var knuterDiv = document.createElement('div');
        knuterDiv.setAttribute("class", "knuterDiv");
        var newKnuteLink = document.createElement('a');
        newKnuteLink.setAttribute("href", "#");
        newKnuteLink.setAttribute("onClick", "visKnute('"+responseAsJSON.knotId+"','" + type + "','" + accessToken + "'); return false;");  
        var newKnuteElement = document.createElement('p');
        newKnuteElement.innerText = (antall+1) + " - " + knuteNavn;
        //console.log(newKnuteElement);
        newKnuteLink.appendChild(newKnuteElement);
        knuterDiv.appendChild(newKnuteLink);
        knuter.appendChild(knuterDiv);

        //newKnuteLink.appendChild(newKnuteElement);
        //knuter.appendChild(newKnuteLink);
    
    
        var knuteTom = document.getElementById('knuteInfoTom');
        var nyKnute = document.getElementById('nyKnuteInput');
        //var nyKnute = document.getElementById('nyKnuteInput');
    
        nyKnute.style.display = 'none';
        knuteTom.style.display = 'block';
    });
}

function searchInput(){
    var inputValue = document.getElementById("brukerSearchFormInput").value;
    //console.log("input: " + inputValue);
    if(inputValue == "null" || inputValue == "undefined" || inputValue == "" || inputValue == " "){
        hentBrukere();
    }else{
        //console.log(inputValue);
        var type = getCookie("Russesamfunnet");
        if (type == 'facebook') {
            UtførSearchInput(type, token, inputValue);
            //setTimeout(function () {
                //window.location.href = "feed.php";
                //console.log("in timeout: " + token);
            //    UtførSearchInput(type, token, inputValue);
            //}, 1000);
        } else if (type == 'russesamfunnet') {
            var accessToken = getCookie("Russesamfunnet-token");
            UtførSearchInput(type, accessToken, inputValue);
        }


        //var accessToken = getCookie("Russesamfunnet-token");
        //var type = "russesamfunnet";

    }
}

function UtførSearchInput(type, accessToken, inputValue) {
    var url = "http://158.38.101.146:8080/searchForRuss?accessToken=" + accessToken + "&type=" + type + "&parameter=" + inputValue;
    var client = new HttpClient();
    client.get(url, function (response) {
        try {
            var responseAsJSON = JSON.parse(response);
            console.log(responseAsJSON);
            populateUserTable(responseAsJSON);
        } catch (error) {
            console.log(error.message);
        }
    });
}

function hentBrukere(){
    //console.log("BRUKERE have been clicked");
    //var accessToken = getCookie("Russesamfunnet-token");
    //var type = "russesamfunnet";

    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        //UtførSearchInput(type, token, inputValue);
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            utførHentBrukere(type, token);
        }, 1000);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        utførHentBrukere(type, accessToken);
    }
}

function utførHentBrukere(type, accessToken){
    var url = "http://158.38.101.146:8080/getAllRussAtSchool?accessToken="+accessToken+"&type="+type;
    //console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        try{
            var responseAsJSON = JSON.parse(response); 
            //console.log(responseAsJSON);
            populateUserTable(responseAsJSON);
        }catch(error){
            console.log(error.message);
        }
    });
}

function populateUserTable(responseAsJSON){
    var table = document.getElementById("brukerTable");
    var tableBody = document.getElementById("brukerTableBody");
    tableBody.innerHTML = "";
    if(responseAsJSON != 'null' && responseAsJSON != 'undefined'){
        //console.log("not null: " + responseAsJSON);
        var rowCounter = 0;
        for(i = 0; i < responseAsJSON.length; i++){
            var role = responseAsJSON[i].russRole;
            if(role == 'admin' || role == 'russ'){
                var row = tableBody.insertRow(rowCounter);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                //var cell8 = row.insertCell(7);
                cell1.innerHTML = responseAsJSON[i].russId;
                cell2.innerHTML = responseAsJSON[i].firstName;
                cell3.innerHTML = responseAsJSON[i].lastName;
                cell4.innerHTML = responseAsJSON[i].email;
                //cell5.innerHTML = responseAsJSON[i].schoolId.schoolName;
                cell5.innerHTML = responseAsJSON[i].russRole;
                cell6.innerHTML = responseAsJSON[i].russStatus;
                //cell7.innerHTML = "Confirm";
                if(responseAsJSON[i].russStatus == 'false'){
                    cell7.innerHTML = `<a href="#" action="admin.php?mode=brukere" onclick="setConfirmed('`+responseAsJSON[i].russId+`','`+rowCounter+`'); return false;" style="width: 20px; float: right; margin-right: 7px;">
                    <img src="images/confirm2.png"  style="height: 30px;"/>
                    </a>`;
                }else if(responseAsJSON[i].russStatus == 'confirmed' && (responseAsJSON[i].russRole == 'russ' || responseAsJSON[i].russRole == 'Russ')){
                    cell7.innerHTML = `<a href="#" action="admin.php?mode=brukere" onclick="setAdmin('`+responseAsJSON[i].russId+`','`+rowCounter+`'); return false;" style="width: 20px; float: left;">
                    <img src="images/uparrow.png"  style="height: 30px;"/>
                    </a><a href="#" action="admin.php?mode=brukere" onclick="setFalse('`+responseAsJSON[i].russId+`','`+rowCounter+`'); return false;" style="width: 20px; float: right; margin-right: 7px;">
                    <img src="images/cancel.png"  style="height: 30px;"/>
                    </a>`;
                }else if(responseAsJSON[i].russStatus == 'confirmed' && (responseAsJSON[i].russRole == 'admin' || responseAsJSON[i].russRole == 'Admin')){
                    cell7.innerHTML = `<a href="#" action="admin.php?mode=brukere" onclick="setRuss('`+responseAsJSON[i].russId+`','`+rowCounter+`'); return false;" style="width: 20px; float: left;">
                    <img src="images/downarrow.png"  style="height: 30px;"/>
                    </a>`;
                }else{
                    cell7.innerHTML = "";
                }
                rowCounter++;
            }

            
        }
    }else{
        console.log("null or undefined");
    }
}

function setConfirmed(russId, i){
    console.log("setConfirmed: " + russId);

    //var accessToken = getCookie("Russesamfunnet-token");
    //var type = "russesamfunnet";

    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        //UtførSearchInput(type, token, inputValue);
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            utførSetConfirmed(type, token, russId, i);
        }, 200);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        utførSetConfirmed(type, accessToken, russId, i);
    }
}

function utførSetConfirmed(type, accessToken, russId, i) {
    var url = "http://158.38.101.146:8080/toggleRussConfirmation?accessToken=" + accessToken + "&type=" + type + "&russToConfirm=" + russId;
    console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);
        if (responseAsJSON == 1) {
            var x = document.getElementById("brukerTableBody").rows[i].cells;
            x[5].innerHTML = "confirmed";

            x[6].innerHTML = `<a href="#" action="admin.php?mode=brukere" onclick="setAdmin('` + russId + `','` + i + `'); return false;" style="width: 20px; float: left;">
                <img src="images/uparrow.png"  style="height: 30px;"/>
                </a><a href="#" action="admin.php?mode=brukere" onclick="setFalse('`+ russId + `','` + i + `'); return false;" style="width: 20px; float: right; margin-right: 7px;">
                <img src="images/cancel.png"  style="height: 30px;"/>
                </a>`;
        }
    });
}

function setFalse(russId, i){
    console.log("setFalse: " + russId);

    //var accessToken = getCookie("Russesamfunnet-token");
    //var type = "russesamfunnet";

    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        //UtførSearchInput(type, token, inputValue);
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            utførSetFalse(type, token, russId, i);
        }, 200);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        utførSetFalse(type, accessToken, russId, i);
    }
}

function utførSetFalse(type, accessToken, russId, i){
    var url = "http://158.38.101.146:8080/toggleRussConfirmation?accessToken="+accessToken+"&type="+type+"&russToConfirm="+russId;
    console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);
        if(responseAsJSON == 1){
            //console.log("the response is 1!");
            var x = document.getElementById("brukerTableBody").rows[i].cells;
            x[5].innerHTML = "false";

            x[6].innerHTML = `<a href="#" action="admin.php?mode=brukere" onclick="setConfirmed('`+russId+`','`+i+`'); return false;" style="width: 20px; float: right; margin-right: 7px;">
                <img src="images/confirm2.png"  style="height: 30px;"/>
                </a>`;
        }
    });
}

function setAdmin(russId, i){
    console.log("setAdmin: " + russId);
    //var accessToken = getCookie("Russesamfunnet-token");
    //var type = "russesamfunnet";

    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        //UtførSearchInput(type, token, inputValue);
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            utførSetAdmin(type, token, russId, i);
        }, 200);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        utførSetAdmin(type, accessToken, russId, i);
    }


}

function utførSetAdmin(type, accessToken, russId, i){
    var url = "http://158.38.101.146:8080/toggleAdmin?accessToken="+accessToken+"&type="+type+"&russToMakeAdmin="+russId;
    console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);
        if(responseAsJSON.russRole == 'admin'){
            console.log("User is now an admin");
        }
        var x = document.getElementById("brukerTableBody").rows[i].cells;
        x[4].innerHTML = "admin";

        x[6].innerHTML = `<a href="#" action="admin.php?mode=brukere" onclick="setRuss('`+russId+`','`+i+`'); return false;" style="width: 20px; float: left;">
                <img src="images/downarrow.png"  style="height: 30px;"/>
                </a>`;
    });
}

function setRuss(russId, i){
    console.log("setRuss: " + russId);

    //var accessToken = getCookie("Russesamfunnet-token");
    //var type = "russesamfunnet";

    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        //UtførSearchInput(type, token, inputValue);
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            utførSetRuss(type, token, russId, i);
        }, 200);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        utførSetRuss(type, accessToken, russId, i);
    }

    
}

function utførSetRuss(type, accessToken, russId, i){
    var url = "http://158.38.101.146:8080/toggleAdmin?accessToken=" + accessToken + "&type=" + type + "&russToMakeAdmin=" + russId;
    console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);
        if (responseAsJSON.russRole == 'russ') {
            console.log("User is now a russ");
        }

        var x = document.getElementById("brukerTableBody").rows[i].cells;
        x[4].innerHTML = "russ";

        x[6].innerHTML = `<a href="#" action="admin.php?mode=brukere" onclick="setAdmin('` + russId + `','` + i + `'); return false;" style="width: 20px; float: left;">
                <img src="images/uparrow.png"  style="height: 30px; padding-top: 0;"/>
                </a><a href="#" action="admin.php?mode=brukere" onclick="setFalse('`+ russId + `','` + i + `'); return false;" style="width: 20px; float: right; margin-right: 7px;">
                <img src="images/cancel.png"  style="height: 30px; padding-top: 0;"/>
                </a>`;
    });
}

function commitChanges(){
    //console.log(id);
    //console.log("changes will be committed!");
    var knotId = document.getElementById('knotIdInfo').value;
    var knuteNavn = document.getElementById('knuteNavnInfo').value;
    var knuteBeskrivelse = document.getElementById('knuteBeskrivelseInfo').value;
    //var accessToken = getCookie("Russesamfunnet-token");
    //var type = "russesamfunnet";
    //console.log(accessToken + ", " + knuteNavn + ", " + knuteBeskrivelse);
    //console.log(knuteNavn + ", " + knuteBeskrivelse);

    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            utførCommitChanges(type, token, knotId, knuteNavn, knuteBeskrivelse);
        }, 1000);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        utførCommitChanges(type, accessToken, knotId, knuteNavn, knuteBeskrivelse);
    }

}

function utførCommitChanges(type, accessToken, knotId, knuteNavn, knuteBeskrivelse){
    var url = "http://158.38.101.146:8080/updateKnot?accessToken="+accessToken+"&type="+type+"&knotId="+knotId+"&knotName="+knuteNavn+"&knotDescription="+knuteBeskrivelse;
    console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        var responseAsJSON = JSON.parse(response);
        //console.log(responseAsJSON);
        
        setTimeout(function () {
            var knuteTom = document.getElementById('knuteInfoTom');
            var knuteInfo = document.getElementById('knuteInfo');
            
            knuteInfo.style.display = 'none';
            knuteTom.style.display = 'block';
            
            hentKnuter();
            //window.location.href = 'admin.php?mode=knute';
        }, 1000);
        
    });




    //window.location.href = "admin.php?mode=knute";
}

function cancel(){
    //console.log("canceling the operation");
    //window.location.href = "admin.php?mode=knute";
    var knuteTom = document.getElementById('knuteInfoTom');
    var knuteInfo = document.getElementById('knuteInfo');
    //var nyKnute = document.getElementById('nyKnuteInput');

    knuteInfo.style.display = 'none';
    knuteTom.style.display = 'block';
    //nyKnute.style.display = 'block';
}

function cancelNyKnute(){
    //console.log("canceling the operation");
    //window.location.href = "admin.php?mode=knute";

    document.getElementById('knuteNavn').value = "";
    document.getElementById('knuteBeskrivelse').value = "";

    var knuteTom = document.getElementById('knuteInfoTom');
    var nyKnuteInput = document.getElementById('nyKnuteInput');
    //var nyKnute = document.getElementById('nyKnuteInput');
    nyKnuteInput.style.display = 'none';
    knuteTom.style.display = 'block';
    //nyKnute.style.display = 'block';
}

function hentUbekreftedeBrukere(){
    console.log("Hent ubekreftede brukere!");

    var accessToken = getCookie("Russesamfunnet-token");
    var type = "russesamfunnet";
    
    var url = "http://158.38.101.146:8080/getAllRussAtSchoolStatusFalse?accessToken="+accessToken+"&type="+type;
    console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);

        try{
            var responseAsJSON = JSON.parse(response); 
            //console.log(responseAsJSON);
            populateUnconfirmedUserTable(responseAsJSON);
        }catch(error){
            console.log(error.message);
        }
        /*
        var table = document.getElementById("bekreftBrukerTable");
        var tableBody = document.getElementById("bekreftBrukerTableBody");
        tableBody.innerHTML = "";
        //
        //bekreftBrukerDivContent.innerHTML = "";
        for(i = 0; i < responseAsJSON.length; i++){

            var row = tableBody.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = responseAsJSON[i].firstName;
            cell2.innerHTML = responseAsJSON[i].lastName;
            cell3.innerHTML = responseAsJSON[i].email;
            cell4.innerHTML = responseAsJSON[i].schoolId.schoolName;


            //var brukerP = document.createElement('p');
            //brukerP.innerText = responseAsJSON[i].russId + " - " + responseAsJSON[i].email + " - " + responseAsJSON[i].firstName + " " + responseAsJSON[i].lastName + " - " + responseAsJSON[i].russStatus + " - " + responseAsJSON[i].russRole;
            //bekreftBrukerDivContent.appendChild(brukerP);
        }*/
        
    });
}

function searchInputConfirm(){

    
    var inputValue = document.getElementById("bekreftBrukerSearchFormInput").value;
    console.log(inputValue);
    /*
    //console.log("input: " + inputValue);
    if(inputValue == "null" || inputValue == "undefined" || inputValue == "" || inputValue == " "){
        hentBrukere();
    }else{
        //console.log(inputValue);
        var accessToken = getCookie("Russesamfunnet-token");
        var type = "russesamfunnet";
        var url = "http://158.38.101.146:8080/searchForRuss?accessToken="+accessToken+"&type="+type+"&parameter="+inputValue;
        var client = new HttpClient();
        client.get(url, function (response) {
            try{
                var responseAsJSON = JSON.parse(response); 
                console.log(responseAsJSON);
                populateUserTable(responseAsJSON);
            }catch(error){
                console.log(error.message);
            }
        });
    }*/
}


function populateUnconfirmedUserTable(responseAsJSON){
    console.log("Populatig the table");
    var table = document.getElementById("bekreftBrukerTable");
    var tableBody = document.getElementById("bekreftBrukerTableBody");
    tableBody.innerHTML = "";
    if(responseAsJSON != 'null' && responseAsJSON != 'undefined'){
        //console.log("not null: " + responseAsJSON);
        for(i = 0; i < responseAsJSON.length; i++){
            var row = tableBody.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            //var cell8 = row.insertCell(7);
            cell1.innerHTML = responseAsJSON[i].russId;
            cell2.innerHTML = responseAsJSON[i].firstName;
            cell3.innerHTML = responseAsJSON[i].lastName;
            cell4.innerHTML = responseAsJSON[i].email;
            //cell5.innerHTML = responseAsJSON[i].schoolId.schoolName;
            cell5.innerHTML = responseAsJSON[i].russRole;
            cell6.innerHTML = responseAsJSON[i].russStatus;
            cell7.innerHTML = "Confirm setFalse";
        }
    }else{
        console.log("null or undefined");
    }
}


function hentMeldinger(){
    console.log("MELDINGER have been clicked");
}



function getFeed(){
    console.log("getFeed");
    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            getFeedExecute(type, token);
        }, 1000);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        getFeedExecute(type, accessToken);
    }
}

function getFeedExecute(type, accessToken){
    console.log("getFeedExecute");
    var url = "http://158.38.101.146:8080/schoolFeed?accessToken="+accessToken+"&type="+type;
    //console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        try{
            var responseAsJSON = JSON.parse(response); 
            populateFeedTable(responseAsJSON);
        }catch(error){
            console.log(error.message);
        }
    });
}

function populateFeedTable(responseAsJSON){
    console.log("populateFeedTable");
    var table = document.getElementById("feedTable");
    var tableBody = document.getElementById("feedTableBody");
    tableBody.innerHTML = "";
    if(responseAsJSON != 'null' && responseAsJSON != 'undefined'){
        //console.log("not null: " + responseAsJSON);
        var rowCounter = 0;
        for(i = 0; i < responseAsJSON.length; i++){
            //var role = responseAsJSON[i].russRole;
            //if(role == 'admin' || role == 'russ'){
                var row = tableBody.insertRow(rowCounter);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);

                cell1.innerHTML = responseAsJSON[i].feedId;
                cell2.innerHTML = responseAsJSON[i].russId.firstName + " " + responseAsJSON[i].russId.lastName;
                cell3.innerHTML = responseAsJSON[i].message;
                cell4.innerHTML = `<a href="#" action="admin.php?mode=brukere" onclick="deleteMessage('`+responseAsJSON[i].feedId+`','`+rowCounter+`'); return false;">
                    <img src="images/cancel.png"  style="height: 30px; padding-top: 0; padding-bottom: 3px; padding-left: 8px;"/>
                    </a>`;
                rowCounter++;
            //}  
        }
    }else{
        console.log("null or undefined");
    }
}

function deleteMessage(feedId, row){
    console.log(feedId + " Being deleted, Row in table = " + row);

    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            deleteMessageExecute(type, token, feedId, row);
        }, 1000);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        deleteMessageExecute(type, accessToken, feedId, row);
    }
}


function deleteMessageExecute(type, accessToken, feedId, row) {
    console.log(feedId + " Deleted, Row in table = " + row);
    var confirmed = confirm("Vil du slette denne meldingen?");
    console.log(confirmed);
    if (confirmed == true) {
        var url = "http://158.38.101.146:8080/deleteMessage?accessToken=" + accessToken + "&type=" + type + "&feedId=" + feedId;
        //console.log(url);
        var client = new HttpClient();
        client.get(url, function (response) {
            console.log(response);
            responseAsJSON = JSON.parse(response);
            console.log(responseAsJSON);
            if (responseAsJSON.response == "An error occured") {
                console.log("An error occured!");
            } else {
                var x = document.getElementById("feedTableBody").rows[row].cells;
                //x[0].innerHTML = "X";
                x[0].style.color = "white";
                x[0].style.background = "green";
                x[1].innerHTML = "SLETTET";
                x[1].style.color = "white";
                x[1].style.background = "green";
                x[2].innerHTML = "SLETTET";
                x[2].style.color = "white";
                x[2].style.background = "green";
                x[3].innerHTML = "";
                x[3].style.background = "green";
            }
        });
    }
}








function errorReport(){
    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            errorReportExecute(type, token);
        }, 1000);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        errorReportExecute(type, accessToken);
    }
}

function errorReportExecute(type, accessToken){
    var errorSubject = document.getElementById('errorSubject').value;
    var errorMessage = document.getElementById('errorMessage').value;

    //console.log(errorSubject + ", " + errorMessage);
    if(errorSubject != "" && errorMessage != ""){
        //console.log("not null");
        var url = "http://158.38.101.146:8080/createErrorReport?accessToken="+accessToken+"&type="+type+"&subject="+errorSubject+"&message="+errorMessage;
        console.log(url);
        var client = new HttpClient();
        client.get(url, function (response) {
            var responseAsJSON = JSON.parse(response);
            var status = document.getElementById('statusField');
            if(responseAsJSON.errorSubject == errorSubject){
                status.innerHTML = "Problemet er registrert: " + responseAsJSON.errorSubject;
                status.style.color = "green";
                //errorSubject.value = "";
                //errorMessage.value = "";
                //errorSubject.innerText = "";
                //errorMessage.innerText = "";
                document.getElementById('errorSubject').value = "";
                document.getElementById('errorMessage').value = "";
            }else{
                status.innerHTML = "En feil oppstod, prøv igjen";
                status.style.color = "red";
            }
        });
    }

    
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

function facebookInit() {
    //console.log("facebook Init 2");
    FB.init({
        appId: '291199641408779',
        cookie: true,
        xfbml: true,
        version: 'v2.12'
    });
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            console.log(response.status);
            token = response.authResponse.accessToken;
            //console.log(token);
            //printToken();
            //getInfo();
        } else if (response.status === 'not_authorized') {
            console.log(response.status);
        } else {
            console.log(response.status);
        }
    });
}//;

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function printToken(){
    console.log("print: " + token);
}
/*
function login() {
    FB.login(function (response) {
        var access_token = response.authResponse.accessToken;
        console.log('Access Token = ' + access_token);
        document.getElementById('authResult').innerHTML = access_token;
        if (response.status === 'connected') {
            setCookie("Russesamfunnet", "facebook", 1)
            window.location.href = 'feed.php';
        } else if (response.status === 'not_authorized') {
            console.log(response.status + " not log");
        } else {
            console.log(response.status + " else log");
        }
    });
}
*/

function getInfo() {
    FB.api('/me', 'GET', { fields: 'last_name,name, email, first_name, id' }, function (response) {
        document.getElementById("topBannerContent").innerHTML = "Velkommen til Russesamfunnet, " + response.name + ", " + response.id;
    });
}

function logout() {
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            console.log(response.status);
        } else if (response.status === 'not_authorized') {
            console.log(response.status);
        } else {
            console.log("ELSE");
        }
    });
    FB.logout(function (response) {
        /*
        * REMEMBER TO DESTROY THE COOKIE 
        */
        setCookie("Russesamfunnet", "", -10)
        setTimeout(function () {
            window.location.href = 'index.php';
        }, 1500);
    });
}

function logoutNoRedirect() {
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            console.log(response.status);
        } else if (response.status === 'not_authorized') {
            console.log(response.status);
        } else {
            console.log("ELSE");
        }
    });
    setCookie("Russesamfunnet", "", -10)
    FB.logout(function (response) {
        /*
         * REMEMBER TO DESTROY THE COOKIE 
         */
        setCookie("Russesamfunnet", "", -10)
    });
}
// </FACEBOOK LOGIN>






/*
function onSignIn(googleUser) {
    console.log("googleUser: " + googleUser);
    var profile = googleUser.getBasicProfile();

    var idToken = googleUser.getAuthResponse();
    console.log(idToken);
    console.log(idToken.id_token);
    setCookie("Russesamfunnet", "Google", 1);
    window.location.href = 'feed.php';
}
*/



function signOutNoRedirect() {
    setTimeout(function () {
        document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:8080/dashboard/projects/russesamfunnet_webside/RusseSamfunnet/index.php";
    }, 1500);
}
// </GOOGLE LOGIN> 




// <LOGOUT>
/*
    * WHEN USER CLICKS LOGOUT, WE NEED TO KNOW WHICH SERVICE THE USER WANTS TO LOGOUT FROM
    * RUSSESAMFUNNET_LOGOUT()
    * FACEBOOK_LOGOUT()
    * GOOGLE_LOGOUT()
*/
function logoutUser() {
    var cookie = getCookie("Russesamfunnet");
    if (cookie == null) {
        console.log("COOKIE == NULL");
        /*USER MUST BE REDIRECTED TO LOGIN AND SESSION WITH
          GOOGLE/FACEBOOK/RUSSESAMFUNNET MUST BE ENDED*/
    }
    else if (cookie != null) {
        console.log("COOKIE != NULL " + cookie);
        if (cookie == "facebook") {
            logout();
        }
        if (cookie == "russesamfunnet") {
            logoutRussesamfunnet();
        }
    }
    else {
        console.log("ELSE...HOW?");
    }
}

function redirectUser() {
    window.location.href = 'index.php';
}
// </LOGOUT>

