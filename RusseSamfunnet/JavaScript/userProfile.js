var filename = "";
var russeId = "test";
token = "";

function getURL() {
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

function logoutRussesamfunnet() {
    //alert("loging out of russesamfunnet!");
    setCookie("Russesamfunnet", "", -10)
    setCookie("Russesamfunnet-token", "", -10);
    setCookie("Russesamfunnet-id", "", -10);
    setTimeout(function () {
        window.location.href = "index.php";
    }, 1500);
}

window.onload = function () {
    //alert("mainScript onload()");
    //console.log("web page: " + window.location.href.includes("feed"));
    var cookie = getCookie("Russesamfunnet");
    if (cookie == null) {
        //alert("Cookie == null");
        facebookInit();
        try {
            logoutNoRedirect();
        } catch (error) {
            //console.log("FacebookError: " + error);
        }
        /*googleInit();
        try {
            signOutNoRedirect();
        } catch (error) {
            console.log("GoogleError: " + error);
        }*/
        redirectUser();
        /*USER MUST BE REDIRECTED TO LOGIN AND SESSION WITH
          GOOGLE/FACEBOOK/RUSSESAMFUNNET MUST BE ENDED*/
    }
    else if (cookie != null) {
        //alert("cookie != null");
        //console.log("HELLO THIS IS THE ONLOAD IN MAINSCRIPT.JS");
        if (cookie == "facebook") {
            facebookInit();
            getProfileInfo();
            getCompletedKnots();
            getGroups();

        }/*
        if (cookie == "google") {
            googleInit();
        }*/
        if (cookie == "russesamfunnet") {
            getProfileInfo();
            getCompletedKnots();
            getGroups();
        }
    }
    else {
        //console.log("ELSE...HOW?");
    }
}

function getProfileInfo(){
    console.log("Getting profile information!");
    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            getProfileInfoExecute(type, token);
            console.log("Facebook user");
        }, 1000);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        console.log("Other user");
        getProfileInfoExecute(type, accessToken);
        
    }
}

function getProfileInfoExecute(type, accessToken){
    console.log("Execute " + type + ": " + accessToken);
    var url = "http://158.38.101.146:8080/userRuss?accessToken=" + accessToken + "&type=" + type;
    var client = new HttpClient();
    client.get(url, function (response) {
        console.log(response);
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);

        var profilePicture = responseAsJSON.profilePicture;
        var russCard = responseAsJSON.russCard;
        var email = responseAsJSON.email;
        var name = responseAsJSON.firstName + " " + responseAsJSON.lastName;
        var status = responseAsJSON.russStatus;
        var role = responseAsJSON.russRole;
        var school = responseAsJSON.schoolId.schoolName;

        if(profilePicture == null){
            console.log("Here");
            document.getElementById("profilePictureImage").src = "images/profile3.png";
        } else if(profilePicture == undefined){
            console.log("Or here");
            document.getElementById("profilePictureImage").src = "images/profile3.png";
            //profilePictureImage.setAttribute("src", "https://demo.phpgang.com/crop-images/demo_files/pool.jpg");
        } else{
            document.getElementById("profilePictureImage").src = profilePicture;
        }

        if(russCard == null){
            console.log("Here");
            document.getElementById("russCardImage").src = "images/russekort.jpg";
        } else if(russCard == undefined){
            console.log("Or here");
            document.getElementById("russCardImage").src = "images/russekort.jpg";
        } else{
            document.getElementById("russCardImage").src = russCard;
        }

        var userContent = document.getElementById("userInfoContent");
        var list = document.createElement("ul");
        var nameElement = document.createElement("li");
        nameElement.innerText = "Navn: " + name;
        var emailElement = document.createElement("li");
        emailElement.innerText = "E-post: " + email;
        var statusElement = document.createElement("li");
        statusElement.innerText = "Status: " + status;
        var roleElement = document.createElement("li");
        roleElement.innerText = "Rolle: " + role;
        var schoolElement = document.createElement("li");
        schoolElement.innerText = "Skole: " + school;
        list.appendChild(nameElement);
        list.appendChild(emailElement);
        list.appendChild(statusElement);
        list.appendChild(roleElement);
        list.appendChild(schoolElement);
        userContent.appendChild(list);
        //getCompletedKnots();
    });
    //getCompletedKnots();
}


function getCompletedKnots(){
    console.log("Getting profile information!");
    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            getCompletedKnotsExecute(type, token);
            console.log("Facebook user");
        }, 1000);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        console.log("Other user");
        getCompletedKnotsExecute(type, accessToken);
        
    }
}

function getCompletedKnotsExecute(type, accessToken){
    console.log("Execute " + type + ": " + accessToken);
    var url = "http://158.38.101.146:8080/completedKnots?accessToken=" + accessToken + "&type=" + type;
    var client = new HttpClient();
    client.get(url, function (response) {
        console.log(response);
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);
        var knotsContent = document.getElementById("knotsContent");
        var numOfKnots = document.getElementById("numOfKnots");
        var knotTableBody = document.getElementById("knotTableBody");
        
        if(responseAsJSON.length == 0){
            var row = knotTableBody.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerText = "Ingen knuter";
            cell2.innerText = "Du har ikke registert noen knuter enda. Gå til Knuter i menyen øverst for å registrere knuter som gjennomført";
            //var listItem = document.createElement("li");
            //var knotName = responseAsJSON[i].knotId.knotName;
            //listItem.innerText = "Du har ikke gjennomført noen knuter";
            //list.appendChild(listItem);
        } else{
            for(i = 0; i < responseAsJSON.length; i++){
                var row = knotTableBody.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = responseAsJSON[i].knotId.knotName;
                cell2.innerHTML = responseAsJSON[i].knotId.knotDetails;
                //var listItem = document.createElement("td");
                //var knotName = responseAsJSON[i].knotId.knotName;
                //listItem.innerText = knotName;
                //list.appendChild(listItem);
            }
        }
        numOfKnots.innerText = responseAsJSON.length;
        //knotsContent.appendChild(list);
    });
}

/*function getCompletedKnotsExecute(type, accessToken){
    console.log("Execute " + type + ": " + accessToken);
    var url = "http://158.38.101.146:8080/completedKnots?accessToken=" + accessToken + "&type=" + type;
    var client = new HttpClient();
    client.get(url, function (response) {
        console.log(response);
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);
        var knotsContent = document.getElementById("knotsContent");
        var numOfKnots = document.getElementById("numOfKnots");
        var list = document.createElement("ol");
        if(responseAsJSON.length == 0){
            var listItem = document.createElement("li");
            //var knotName = responseAsJSON[i].knotId.knotName;
            listItem.innerText = "Du har ikke gjennomført noen knuter";
            list.appendChild(listItem);
        } else{
            for(i = 0; i < responseAsJSON.length; i++){
                var listItem = document.createElement("li");
                var knotName = responseAsJSON[i].knotId.knotName;
                listItem.innerText = knotName;
                list.appendChild(listItem);
            }
        }
        numOfKnots.innerText = responseAsJSON.length;
        knotsContent.appendChild(list);
    });
}*/


function getGroups(){
    console.log("Getting groups information!");
    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            getGroupsExecute(type, token);
            console.log("Facebook user");
        }, 1000);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        console.log("Other user");
        getGroupsExecute(type, accessToken);
        
    }
}

function getGroupsExecute(type, accessToken){
    console.log("getGroupsExecute " + type + ": " + accessToken);
    var url = "http://158.38.101.146:8080/groups?accessToken=" + accessToken + "&type=" + type;
    var client = new HttpClient();
    client.get(url, function (response) {
        //response.length
        //console.log(response.length);
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);
        var numOfGroups = document.getElementById("numOfGroups");
        if(responseAsJSON.length == 0){
            console.log("Not a member of any group");
            var groupsContent =  document.getElementById("groupsContent");
            
            var list = document.createElement("ul");
            var listItem = document.createElement("li");
            listItem.innerText = "Du er ikke medlem i noen grupper";
            list.appendChild(listItem); 
            groupsContent.appendChild(list);
        } else{
            var groupsContent =  document.getElementById("groupsContent");
            var list = document.createElement("ul");
            for(i = 0; i < responseAsJSON.length; i++){
                var listItem = document.createElement("li");
                listItem.innerText = responseAsJSON[i].groupId.groupName;
                list.appendChild(listItem); 

            }
            
            groupsContent.appendChild(list);
        }
        numOfGroups.innerText = responseAsJSON.length;

    });
}






function generateFilename(){
    filename = russeId + "profil" + ".jpg";
}

function onClickUpload(){ 
    alert("resrr");
generateFilename();
var selectedFile = document.getElementById('input').files[0];

var formData = new FormData("file",selectedFile);
    alert("resrr");
console.log(filename);

var request = new XMLHttpRequest();
alert(request);
request.open("POST", "localhost:8090");
formData.append('name', 'fuckert123.jpg');
alert(formData);
         
request.send(formData);
alert(request);

alert("check");

}