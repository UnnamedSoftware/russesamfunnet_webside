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
    makeTableLeaderboard(type, accessToken);
    console.log(accessToken);
}

function makeTableLeaderboard(type, accessToken){
    var url = "http://158.38.101.146:8080/schoolScoreboard?accessToken=" + accessToken + "&type=" + type;
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);
        
        var tbl=$("<table/>").attr("id","table");
$("#div1").append(tbl);
$("#table").append("<tbody>"); 
for(var i=0;i<10;i++)
{
    var tr="<tr>";
    var td2="<td>"+responseAsJSON[i]["position"]+"</td>";
    var td3="<td>"+responseAsJSON[i]["russId"]["firstName"] + " " +responseAsJSON[i]["russId"]["lastName"]+"</td>";
    var td4="<td>"+responseAsJSON[i]["points"]+"</td>\n\</tr>";

   $("#table").append(tr+td2+td3+td4);

}
$("#table").append("</tbody>"); 
        
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