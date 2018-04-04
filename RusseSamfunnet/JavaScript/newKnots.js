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
    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            utførHentKnuter(type, token);
        }, 700);
    } else if(type == 'russesamfunnet'){
        var accessToken = getCookie("Russesamfunnet-token");
        utførHentKnuter(type, accessToken);
    }
}

function utførHentKnuter(type, accessToken) {
    makeTableMuligeKnuter(type, accessToken);
    makeTableFerdigeKnuter(type, accessToken);
}

function makeTableMuligeKnuter(type, accessToken){
    var url = "http://158.38.101.146:8080/knots?accessToken=" + accessToken + "&type=" + type;
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);
        //console.log(responseAsJSON.length);
        var tbl=$("<table/>").attr("id","table");
    $("#div1").append(tbl);
    $("#table2").append("<tbody>");
    
        for (i = 0; i < responseAsJSON.length; i++) {
            console.log("KNUTER have been clicked!");
    
        var currentId = responseAsJSON[i]["knotId"]["knotId"];
        var tr="<tr>";
        var td2="<td>"+responseAsJSON[i]["knotName"]+"</td>";
        var td3="<td>"+responseAsJSON[i]["knotDetails"]+"</td>";
        /*var td4="<td>"+responseAsJSON[i]["witnessId1"]["firstName"]+ " " +obj[i]["witnessId1"]["lastName"]+ " og " +obj[i]["witnessId2"]["firstName"]+ " " +obj[i]["witnessId2"]["lastName"]+"</td>";*/
        var td4="<td>"+ '<button type="button"' + "onclick='makeOrder(" + currentId + ")'" + ">X</button>" +"</td>\n\</tr>";

       $("#table2").append(tr+td2+td3+td4);

    }
    $("#table2").append("</tbody>");
        
    });
}

function makeTableFerdigeKnuter(type, accessToken){
    var url = "http://158.38.101.146:8080/knots?accessToken=" + accessToken + "&type=" + type;
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);
        //console.log(responseAsJSON.length);
        var tbl=$("<table/>").attr("id","table");
    $("#div1").append(tbl);
    $("#table").append("<tbody>");
    
        for (i = 0; i < responseAsJSON.length; i++) {
            console.log("KNUTER have been clicked!");
    
        var currentId = responseAsJSON[i]["knotId"]["knotId"];
        var tr="<tr>";
        var td2="<td>"+responseAsJSON[i]["knotName"]+"</td>";
        var td3="<td>"+responseAsJSON[i]["knotDetails"]+"</td>";
        /*var td4="<td>"+responseAsJSON[i]["witnessId1"]["firstName"]+ " " +obj[i]["witnessId1"]["lastName"]+ " og " +obj[i]["witnessId2"]["firstName"]+ " " +obj[i]["witnessId2"]["lastName"]+"</td>";*/
        var td4="<td>"+ '<button type="button"' + "onclick='makeOrder(" + currentId + ")'" + ">X</button>" +"</td>\n\</tr>";

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