/*
CHECK FOR COOKIES
-> REDIRECT TO FRONT PAGE IF COOKIE EXISTS = USER ALREADY LOGGED IN
-> ASK FOR LOGIN IF COOKIE !EXISTS
*/
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
// <DEFAULT LOGIN> *****************


// DEFAULT LOGIN MED RUSSESAMFUNNET
function auth() {
    var url = 'http://158.38.101.146:8080/login?email=' + document.getElementById('email').value + "&password=" + document.getElementById('password').value;
    var client = new HttpClient();
    client.get(url, function (response) {
        console.log(response);
        if(response != null){
            loginRussesamfunnet(response);
        }
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


function russesamfunnetInit(){
    /*
    GET DATA FROM REST API
    CREATE THE COOKIE 
    SET THE VALUES ON THE PAGE
    */
}

function loginRussesamfunnet(status){
    setCookie("Russesamfunnet", "russesamfunnet", 1)
    setCookie("Russesamfunnet-token", "FDSHJGKFHDSJK45W54233432FDSAXXZHJFKDWSW-FTDSJKFDSS", 1);
    if(status == "new"){
        window.location.href = 'additionalInfo.php';
    }
    if(status == "true"){
        window.location.href = 'feed.php';
    }
}



// </DEFAULT LOGIN>

// <FACEBOOK LOGIN> *****************
window.onload = function(){
    var cookie = getCookie("Russesamfunnet");
    if(cookie == null){
    } 
    else if(cookie != null){
        if(cookie == "facebook"){
            facebookInit();
        }
        if(cookie == "google"){
            googleInit();
        }
        if(cookie == "russesamfunnet"){
        }
    }
    else{
        console.log("ELSE...HOW?");
    }
}

function facebookInit() {
    FB.init({
        appId      : '406426833123738',
        cookie     : true, 
        xfbml      : true,
        version    : 'v2.12'
    });
    FB.getLoginStatus(function(response){
        if(response.status === 'connected'){
            //console.log(response.status + " *** CONNECTED (INIT) ***");     
            //getInfo();
        } else if(response.status === 'not_authorized') {
            //console.log(response.status + " *** NOT_AUTHORIZED (INIT) ***");   
        } else {
            //console.log(response.status  + " *** ELSE (INIT) ***");
        }
    });
};

(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function login(){
    facebookInit();
    FB.login(function(response){
        var access_token =   response.authResponse.accessToken;
        if(response.status === 'connected'){
            //console.log(response.status + " *** CONNECTED (LOGIN) ***");
            setCookie("Russesamfunnet", "facebook", 1);
            window.location.href = 'feed.php';
        } else if(response.status === 'not_authorized') {
            //console.log(response.status + " *** NOT_AUTHORIZED (LOGIN) ***");
        } else {
            //console.log(response.status  + " *** ELSE (LOGIN) ***");
        }
    });
}

/*
function getInfo() {
    FB.api('/me', 'GET', {fields: 'last_name,name, email, first_name, id'}, function(response) {
    });
}
*/

/*
function logout(){
    facebookInit();
    FB.getLoginStatus(function(response){
        if(response.status === 'connected'){} 
        else if(response.status === 'not_authorized') {} 
        else {}
    });

    FB.logout(function(response) {*/
        /*
        * REMEMBER TO DESTROY THE COOKIE 
        */
        /*setCookie("Russesamfunnet", "", -10)
        alert("Cookie is being deleted");
        window.location.href = 'index.php';
    });
}*/

// </FACEBOOK LOGIN>


// <GOOGLE LOGIN> *****************
function googleInit(){
    /* 
    INITIALIZE GOOGLE LOGIN
    */
    onLoadGoogle();
}

function onLoadGoogle() {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
  }

function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    var idToken = googleUser.getAuthResponse();
    //console.log(idToken);
    //console.log(idToken.id_token);
    setCookie("Russesamfunnet", "google", 1) 
    window.location.href = 'feed.php';
}

/*
function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    window.location.href = 'index.php';
    auth2.signOut().then(function(){
        setCookie("Russesamfunnet", "", -10) 
        alert("Cookie is being deleted");
    });
}
*/
// </GOOGLE LOGIN> 




// <LOGOUT>

/*

WHEN USER CLICKS LOGOUT, WE NEED TO KNOW WHICH SERVICE THE USER WANTS TO LOGOUT FROM
    * RUSSESAMFUNNET_LOGOUT()
    * FACEBOOK_LOGOUT()
    * GOOGLE_LOGOUT()
*/

// </LOGOUT>