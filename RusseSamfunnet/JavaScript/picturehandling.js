var filename = "";
var russeId = "default";

function generateFilenameProfilePicture(){
    
    filename = russeId + "profil" + ".jpg";
    document.getElementById('name').value=filename;
    document.forms[0].submit();
}

var accessToken = "";
var type = "";

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
    
    hentKnuter();
}

function hentKnuter() {
    console.log("KNUTER have been clicked! ");
    type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            utførHentKnuter(type, accessToken);
            
        }, 700);
    } else if(type == 'russesamfunnet'){
        accessToken = getCookie("Russesamfunnet-token");
        utførHentKnuter(type, accessToken);
        
    }
}

function utførHentKnuter(type, accessToken) {
    makeTableMuligeKnuter(type, accessToken);
    makeTableFerdigeKnuter(type, accessToken);
    console.log(accessToken);
}

function makeTableMuligeKnuter(type, accessToken){
    var url = "http://158.38.101.146:8080/userRuss?accessToken=" + accessToken + "&type=" + type;
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);

        russeId = responseAsJSON[i]["knotId"];
        
    
        
    });
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
            accessToken = response.authResponse.accessToken;
            console.log(accessToken);
            
            //printToken();
            //getInfo();
        } else if (response.status === 'not_authorized') {
            console.log(response.status);
        } else {
            console.log(response.status);
        }
    });
};