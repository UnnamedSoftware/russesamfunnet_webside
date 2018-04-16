token = "";
feedMessages = "test";
messagesDisplayed = 0;
displayFirstMessages = 4;
displayNoOfMessages = 10;

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



// <DEFAULT LOGIN> *****************
// DEFAULT LOGIN MED RUSSESAMFUNNET
function auth() {
    var url = 'http://158.38.101.146:8080/login?email=' + document.getElementById('email').value + "&password=" + document.getElementById('password').value;
    var client = new HttpClient();
    client.get(url, function (response) {
        document.getElementById("authResult").innerHTML = response;
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

function russesamfunnetInit() {

    /*
    GET DATA FROM REST API

    CREATE THE COOKIE 

    SET THE VALUES ON THE PAGE
    */

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




// </DEFAULT LOGIN>




// <FACEBOOK LOGIN> *****************
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
            getFeed();

        }/*
        if (cookie == "google") {
            googleInit();
        }*/
        if (cookie == "russesamfunnet") {
            getFeed();
        }
    }
    else {
        //console.log("ELSE...HOW?");
    }
}



function getInfoForPage() {
    //console.log("is this code executed? feed.js");
    //getUserInfo();
    getFeed();
    //getSchools();

    // fetch data from the rest api and add the data to the page.
}

function getUserInfo() {
    //console.log("Getting user info and adding it to the page");
}

function getFeed() {
    //console.log("KNUTER have been clicked! ");
    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            getFeedExecute(type, token);
        }, 1000);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        getFeedExecute(type, accessToken);
    }
}

function getFeedExecute(type, accessToken) {
    //console.log("Getting the feed for this user and adding it to the page lol");

    var feedItems = document.getElementById('feedItems');

    var url = "http://158.38.101.146:8080/schoolFeed?accessToken=" + accessToken + "&type=" + type;
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);
        feedMessages = responseAsJSON;
        
        //console.log(responseAsJSON);
        /*
        MAKE A CHECK HERE TO SEE IF THE RESPONSE IS NULL OR UNDEFINED! 
        */
        var cookieId = getCookie('Russesamfunnet-id');
        for (i = (responseAsJSON.length - 1); i > (responseAsJSON.length - (displayFirstMessages+1)); i--) {
            var feedId = responseAsJSON[i].feedId;
            var russId = responseAsJSON[i].russId.russId;
            var message = responseAsJSON[i].message;
            var firstName = responseAsJSON[i].russId.firstName;
            var lastName = responseAsJSON[i].russId.lastName;
            var theMessage = document.createElement('div');
            /*
            Check if the userid matches!!! 
            */
            theMessage.setAttribute("class", "container col-7 col-m-7 feedStyle");
            theMessage.setAttribute("id", "message" + feedId);
            if (cookieId == russId) {
                theMessage.innerHTML = `
                <div class="theMessageSender">
                    <div class="theSendersName" onclick="showHideMessage(`+ feedId + `)">`
                    +
                    firstName + ` ` + lastName
                    +
                    `</div>
                    <div class="deleteButton">
                        <a href="#" onclick="deleteMessage(`+ feedId + `); return false;">X</a>
                    </div>
                </div>
                <div class="theMessage" id="`+ feedId + `">`
                    +
                    message
                    +
                    `</div>
                <div class="theMessageTimestamp">
                    09:02:42 - 10.04.2018
                </div>`;


            } else if (cookieId != russId) {
                theMessage.innerHTML = `
                <div class="theMessageSender">
                    <div class="theSendersName" onclick="showHideMessage(`+ feedId + `)">`
                    +
                    firstName + ` ` + lastName
                    +
                    `</div>
                    <div class="deleteButton">
                    </div>
                </div>
                <div class="theMessage" id="`+ feedId + `">`
                    +
                    message
                    +
                    `</div>
                <div class="theMessageTimestamp">
                    09:02:42 - 10.04.2018
                </div>`;
            }
            
            feedItems.appendChild(theMessage);
            messagesDisplayed++;
        }
        //var showMoreMessages


    });
}

function showMore(){
    //console.log("viser flere");
    //console.log(feedMessages);
    //console.log(messagesDisplayed);
    //console.log("i: " + (feedMessages.length - (messagesDisplayed + 1)));
    //console.log(">: " + (feedMessages.length - (displayNoOfMessages + messagesDisplayed + 1)));
    //console.log(displayNoOfMessages);
    //console.log(messagesDisplayed);
    //var displayNoOfMessages = 1;
    var displayedMessagesVar = messagesDisplayed;
    var feedItems = document.getElementById('feedItems');
    var cookieId = getCookie('Russesamfunnet-id');
    for (i = (feedMessages.length - (displayedMessagesVar + 1)); i > (feedMessages.length - (displayNoOfMessages + displayedMessagesVar + 1)); i--) {
        //console.log("for");
        //console.log(feedMessages);
        if (feedMessages[i] != undefined) {
            var feedId = feedMessages[i].feedId;
            var russId = feedMessages[i].russId.russId;
            var message = feedMessages[i].message;
            var firstName = feedMessages[i].russId.firstName;
            var lastName = feedMessages[i].russId.lastName;
            var theMessage = document.createElement('div');
            theMessage.setAttribute("class", "container col-7 col-m-7 feedStyle");
            theMessage.setAttribute("id", "message"+feedId);
            if (cookieId == russId) {
                theMessage.innerHTML = `
                <div class="theMessageSender">
                    <div class="theSendersName" onclick="showHideMessage(`+ feedId + `)">`
                    +
                    firstName + ` ` + lastName
                    +
                    `</div>
                    <div class="deleteButton">
                        <a href="#" onclick="deleteMessage(`+ feedId + `); return false;">X</a>
                    </div>
                </div>
                <div class="theMessage" id="`+ feedId + `">`
                    +
                    message
                    +
                    `</div>
                <div class="theMessageTimestamp">
                    09:02:42 - 10.04.2018
                </div>`;


            } else if (cookieId != russId) {
                theMessage.innerHTML = `
                <div class="theMessageSender">
                    <div class="theSendersName" onclick="showHideMessage(`+ feedId + `)">`
                    +
                    firstName + ` ` + lastName
                    +
                    `</div>
                    <div class="deleteButton">
                    </div>
                </div>
                <div class="theMessage" id="`+ feedId + `">`
                    +
                    message
                    +
                    `</div>
                <div class="theMessageTimestamp">
                    09:02:42 - 10.04.2018
                </div>`;
            }
            feedItems.appendChild(theMessage);
            messagesDisplayed++;
        }else{
            //console.log("no more to show");
        }

    }
}

function showHideMessage(id){
    //console.log("in showHideMessage(): " + id);
    var messageToChange = document.getElementById(id);
    var status = window.getComputedStyle(messageToChange);
    var display = status.getPropertyValue('display');
    //var status = messageToChange.style.display;
    //console.log("status: " + display);
    if(display == "block"){
        messageToChange.style.display = "none";
    }
    if(display == "none"){
        messageToChange.style.display = "block";

    }

}

function handleActions() {
    //console.log("handle actions like clicks on a feed item");
}

function postNewMessageToFeed() {
    //console.log("post a new message to the feed (separate for area, school and group?)");
    var message = document.getElementById('messageTextarea').value;
    //console.log(testingPurposes.value);

    //var feed = document.getElementById('messages');
    /*
    ADD THE NEW MESSAGE TO THE DATABASE
    AND RELOAD THE PAGE 
    */
    //testingPurposes.value = "";

    //console.log("postNewMessageToFeed have been clicked! ");
    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            //window.location.href = "feed.php";
            //console.log("in timeout: " + token);
            postNewMessageToFeedExecute(type, token, message);
        }, 1000);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        postNewMessageToFeedExecute(type, accessToken, message);
    }
}

function postNewMessageToFeedExecute(type, accessToken, message){
    var url = "http://158.38.101.146:8080/postFeedToSchool?accessToken=" + accessToken + "&type=" + type + "&message=" + message;
    var client = new HttpClient();
    client.get(url, function (response) {
        //console.log(response);
        var responseAsJSON = JSON.parse(response);
        //console.log(responseAsJSON);
        setTimeout(function () {
            window.location.href = "feed.php";
        }, 100);
    });
}

function deleteMessage(feedId) {
    //console.log("deleteMessage have been clicked! " + feedId);
    var type = getCookie("Russesamfunnet");
    if (type == 'facebook') {
        setTimeout(function () {
            deleteMessageExecute(type, token, feedId);
        }, 1000);
    } else if (type == 'russesamfunnet') {
        var accessToken = getCookie("Russesamfunnet-token");
        deleteMessageExecute(type, accessToken, feedId);
    }
}

function deleteMessageExecute(type, accessToken, feedId){
    var testing = document.getElementById("message"+feedId);
    var url = "http://158.38.101.146:8080/deleteMessage?accessToken=" + accessToken + "&type=" + type + "&feedId=" + feedId;
    var client = new HttpClient();
    //console.log(url);
    client.get(url, function (response) {
        var responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);
        if(responseAsJSON.response == "Message successfully deleted"){
            setTimeout(function () {
                testing.style.display = "none";
                //window.location.href = "feed.php";
            }, 200);
        } else{
            console.log("An error occured!");
        }
    });
}













function facebookInit() {
    //console.log("facebook Init");
    FB.init({
        appId: '291199641408779',
        cookie: true,
        xfbml: true,
        version: 'v2.12'
    });
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            //console.log(response.status);
            token = response.authResponse.accessToken;
            //getInfo();
            //alert("connected!");
        } else if (response.status === 'not_authorized') {
            //console.log(response.status);
        } else {
            //console.log(response.status);
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
/*
function getInfo() {
    FB.api('/me', 'GET', { fields: 'last_name,name, email, first_name, id' }, function (response) {
        document.getElementById("topBannerContent").innerHTML = "Velkommen til Russesamfunnet, " + response.name + ", " + response.id;
    });
}
*/
function logout() {
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            //console.log(response.status);
        } else if (response.status === 'not_authorized') {
            //console.log(response.status);
        } else {
            //console.log("ELSE");
        }
    });
    FB.logout(function (response) {
        /*
        * REMEMBER TO DESTROY THE COOKIE 
        */
        setCookie("Russesamfunnet", "", -10)
        setTimeout(function () {
            //alert("logging out of FB");
            window.location.href = 'index.php';
        }, 1500);
    });
}

function logoutNoRedirect() {
    //alert("logout no redirect!");
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            //console.log(response.status);
        } else if (response.status === 'not_authorized') {
            //console.log(response.status);
        } else {
            //console.log("ELSE");
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





// <GOOGLE LOGIN> *****************
/*
function googleInit() {
    /* 
    INITIALIZE GOOGLE LOGIN
    *//*
onLoadGoogle();
}

function onLoadGoogle() {
gapi.load('auth2', function () {
    gapi.auth2.init();
});
}*/

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
/*
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        setCookie("Russesamfunnet", "", -10);
        setTimeout(function () {
            document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:8080/dashboard/projects/russesamfunnet_webside/RusseSamfunnet/index.php";
        }, 1500);
    });
}

function signOutNoRedirect() {
    setTimeout(function () {
        document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:8080/dashboard/projects/russesamfunnet_webside/RusseSamfunnet/index.php";
    }, 1500);
}*/
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
        //console.log("COOKIE == NULL");
        /*USER MUST BE REDIRECTED TO LOGIN AND SESSION WITH
          GOOGLE/FACEBOOK/RUSSESAMFUNNET MUST BE ENDED*/
    }
    else if (cookie != null) {
        //console.log("COOKIE != NULL " + cookie);
        if (cookie == "facebook") {
            logout();
        }
        /*
        if (cookie == "google") {
            signOut();
        }*/
        if (cookie == "russesamfunnet") {
            logoutRussesamfunnet();
        }
    }
    else {
        //console.log("ELSE...HOW?");
    }
}

function redirectUser() {
    setTimeout(function () {
        window.location.href = 'index.php';
    }, 1000);

}
// </LOGOUT>