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


window.onload = function () {
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
    var accessToken = getCookie("Russesamfunnet-token");
    var type = "russesamfunnet";
    var url = "http://158.38.101.146:8080/knots?accessToken="+accessToken+"&type="+type;
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);
        //console.log(responseAsJSON.length);
        var knuter = document.getElementById('knuter');
        document.getElementById('knuter').innerHTML = "";
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
    console.log("KnuteID: " + id);
    var knuteTom = document.getElementById('knuteInfoTom');
    var knuteInfo = document.getElementById('knuteInfo');
    var nyKnute = document.getElementById('nyKnuteInput');
    //var deletKnotButton = document.getElementById('deleteKnotButton');
    document.getElementById('deleteKnotButton').setAttribute("onclick", "slettKnute("+id+"); return false;");

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
        //console.log(responseAsJSON);
        // var newKnuteElement = document.createElement('p');
        var knotId = document.createElement('p'); 
        //knotId.innerHTML = "<br>KNUTE-ID:" + responseAsJSON.knotId;
        //knotId.innerHTML = "<br>";


        //var knotName = document.createElement('p');
        //knotName.innerHTML = "KNUTENAVN: " + responseAsJSON.knotName;
        //var knotDetails = document.createElement('p');
        //knotDetails.innerHTML = "KNUTEDETALJER: " + responseAsJSON.knotDetails;
        
        //console.log(" ID = " + responseAsJSON.knotId);
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

        //console.log("EditForm = " + editForm.attributes);
/*
        editForm.innerHTML = `
        <form name="nyRusseKnute" onSubmit="commitChanges(); return false;">
            KNUTENAVN:
            <input type="text" id="knuteNavnInfo" name="knuteNavn" value="`+responseAsJSON.knotName+`"/><br><br>
            Knutebeskrivelse:
            <input type="text" id="knuteBeskrivelseInfo" navn="knuteBeskrivelse" value="`+responseAsJSON.knotDetails+`"/><br><br>
        </form>
        `;*/
        //<textarea
        //var knotNameInput = document.createElement('input');
        //var knotDetailsInput = document.createElement('input');





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
        //showKnotInfo.appendChild(knotId);
        //showKnotInfo.appendChild(knotName);
        //showKnotInfo.appendChild(knotDetails);
        showKnotInfo.appendChild(editForm);
        //showKnotInfo.appendChild(knotPicture);
        //showKnotInfo.appendChild(schoolId);
        //showKnotInfo.appendChild(schoolName);
        //showKnotInfo.appendChild(schoolStatus);
        //showKnotInfo.appendChild(schoolLocation);
        //showKnotInfo.appendChild(schoolMunicipality);
        //showKnotInfo.appendChild(schoolLongitude);
        //showKnotInfo.appendChild(schoolLatitude);

        //console.log(showKnotInfo.innerHTML);

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

function slettKnute(id){
    console.log("knot to delete: " + id);
    var confirm = window.confirm("are you sure?");
    console.log("confirm or not! " + confirm);
    if(confirm){
        console.log("Deleted");
        var accessToken = getCookie("Russesamfunnet-token");
        var type = "russesamfunnet";
        var url = "http://158.38.101.146:8080/deleteKnot?accessToken="+accessToken+"&type="+type+"&knotId="+id;
        var client = new HttpClient();
        client.get(url, function (response) {
            console.log(response);
            if(response == 'Knot successfully deleted.'){
                console.log("I redirect metoden!");
                setTimeout(function () {
                    var knuteTom = document.getElementById('knuteInfoTom');
                    var knuteInfo = document.getElementById('knuteInfo');
                    
                    knuteInfo.style.display = 'none';
                    knuteTom.style.display = 'block';
                    
                    hentKnuter();
                    //window.location.href = 'admin.php?mode=knute';
                }, 1000);
                
                //window.location.href = 'admin.php?mode=knute';
                //knuteRedirect();
            }else{
                console.log("Error");
                setTimeout(function () {
                    window.location.href = 'admin.php?mode=knute';
                }, 1000);
            }
            //var responseAsJSON = JSON.parse(response);
            //console.log(responseAsJSON);


        });
    }else{
        console.log("Not deleted");
    }
}

function knuteRedirect() {
    console.log("I redirect metoden!");
    setTimeout(function () {
        location.reload();
    }, 1500);
}



function registrerKnute(){
    console.log("registrer knute");

    var knuteNavn = document.getElementById('knuteNavn').value;
    var knuteBeskrivelse = document.getElementById('knuteBeskrivelse').value;
    var accessToken = getCookie("Russesamfunnet-token");
    var type = "russesamfunnet";
    console.log(accessToken + ", " + knuteNavn + ", " + knuteBeskrivelse);

    document.getElementById('knuteNavn').value = "";
    document.getElementById('knuteBeskrivelse').value = "";

    
    var url = "http://158.38.101.146:8080/addKnot?accessToken="+accessToken+"&type="+type+"&knotName="+knuteNavn+"&knotDescription="+knuteBeskrivelse;
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);
        var knuter = document.getElementById('knuter');
        var antall = knuter.getElementsByTagName('a').length;
        console.log(antall);
        var newKnuteLink = document.createElement('a');
        newKnuteLink.setAttribute("href", "#");
        newKnuteLink.setAttribute("onClick", "visKnute('"+responseAsJSON.knotId+"'); return false;");  
        var newKnuteElement = document.createElement('p');
        newKnuteElement.innerText = (antall+1) + " - " + knuteNavn;
        console.log(newKnuteElement);
        newKnuteLink.appendChild(newKnuteElement);
        knuter.appendChild(newKnuteLink);
    
    
        var knuteTom = document.getElementById('knuteInfoTom');
        var nyKnute = document.getElementById('nyKnuteInput');
        //var nyKnute = document.getElementById('nyKnuteInput');
    
        nyKnute.style.display = 'none';
        knuteTom.style.display = 'block';
    });
}

function hentBrukere(){
    console.log("BRUKERE have been clicked");
}

function commitChanges(){
    //console.log(id);
    console.log("changes will be committed!");
    var knotId = document.getElementById('knotIdInfo').value;
    var knuteNavn = document.getElementById('knuteNavnInfo').value;
    var knuteBeskrivelse = document.getElementById('knuteBeskrivelseInfo').value;
    var accessToken = getCookie("Russesamfunnet-token");
    var type = "russesamfunnet";
    //console.log(accessToken + ", " + knuteNavn + ", " + knuteBeskrivelse);
    console.log(knuteNavn + ", " + knuteBeskrivelse);

    
    var url = "http://158.38.101.146:8080/updateKnot?accessToken="+accessToken+"&type="+type+"&knotId="+knotId+"&knotName="+knuteNavn+"&knotDescription="+knuteBeskrivelse;
    console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);
        
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

    document.getElementById('knuteNavn').value = "";
    document.getElementById('knuteBeskrivelse').value = "";

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

function facebookInit() {
    console.log("facebook Init");
    FB.init({
        appId: '291199641408779',
        cookie: true,
        xfbml: true,
        version: 'v2.12'
    });
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            console.log(response.status);
            getInfo();
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

