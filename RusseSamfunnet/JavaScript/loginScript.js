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
    var url = 'http://158.38.101.146:8080/login?email=' + document.getElementById('email').value + "&password=" + document.getElementById('password').value
    //console.log(document.getElementById('email').value);
    var client = new HttpClient();
    client.get(url, function (response) {
        document.getElementById("authResult").innerHTML=response;
        //document.write(response);
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


// </DEFAULT LOGIN>

// <FACEBOOK LOGIN> *****************
window.onload = function(){
    var cookie = getCookie("Russesamfunnet");
    if(cookie == null){
        //console.log("COOKIE == NULL");
    } 
    else if(cookie != null){
        //console.log("COOKIE != NULL " + cookie);   
        if(cookie == "facebook"){
            //console.log("User have logged in with Facebook!");
            facebookInit();
        }
        if(cookie == "google"){
            //console.log("User have logged in with Google!");
            googleInit();
        }
        if(cookie == "russesamfunnet"){
            //console.log("User have logged in with Russesamfunnet!");
        }
    }
    else{
        //console.log("ELSE...HOW?");
    }
}




//window.fbAsyncInit = function() {
function facebookInit() {
    //console.log("facebook Init");
    FB.init({
        appId      : '406426833123738',
        cookie     : true, 
        xfbml      : true,
        version    : 'v2.12'
    });
    FB.getLoginStatus(function(response){
        if(response.status === 'connected'){
            //console.log(response.status);     
            getInfo();
        } else if(response.status === 'not_authorized') {
            //console.log(response.status);   
        } else {
            //console.log(response.status);
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
        //console.log('Access Token = '+ access_token);
        //document.getElementById('authResult').innerHTML = access_token;
        //var email = response.email;
        //console.log(email);

        if(response.status === 'connected'){
            // Make facebook cookie!
            setCookie("Russesamfunnet", "facebook", 1) 
            window.location.href = 'feed.php';
        } else if(response.status === 'not_authorized') {
            //console.log(response.status + " not log");
        } else {
            //console.log(response.status + " else log");
        }

    });
}

function getInfo() {
    FB.api('/me', 'GET', {fields: 'last_name,name, email, first_name, id'}, function(response) {
        //document.getElementById("topBannerContent").innerHTML="Velkommen til Russesamfunnet, "+response.name+", "+response.id;
    });
}

function logout(){
    facebookInit();
    FB.getLoginStatus(function(response){
        if(response.status === 'connected'){
            //console.log(response.status);
        } else if(response.status === 'not_authorized') {
            //console.log(response.status);
        } else {
            //console.log("ELSE");
        }
    });



    FB.logout(function(response) {
        /*
        * REMEMBER TO DESTROY THE COOKIE 
        */
        //eraseCookie("Russesamfunnet");
        setCookie("Russesamfunnet", "", -10) 
        //console.log(response + "  TOTOTDSFJDSFds");
        window.location.href = 'index.php';
    });
}

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
    //console.log("googleUser: " + googleUser);
    var profile = googleUser.getBasicProfile();
/*
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
*/
    /*
    console.log("profile: " + profile);
    console.log("email: " + profile.getEmail());
    console.log("imageURL" + profile.getImageUrl());
    console.log("authInstance" + profile.getAuthInstance());
    console.log("loginstatus" + profile.getLoginStatus());
*/


    var idToken = googleUser.getAuthResponse();
    //console.log(idToken);
    //console.log(idToken.id_token);
    $(".g-signin2").css("display", "none");
    $(".data").css("display", "block");
    $("#pic").attr('src', profile.getImageUrl());
    $("#email").text(profile.getEmail());


    setCookie("Russesamfunnet", "google", 1) 
    window.location.href = 'feed.php';
}

function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    window.location.href = 'index.php';
    auth2.signOut().then(function(){
        //alert("You have been successfully signed out");
        setCookie("Russesamfunnet", "", -10) 

        $(".g-signin2").css("display", "block");
        $(".data").css("display", "none");
    });

}


// </GOOGLE LOGIN> 




// <LOGOUT>

/*

WHEN USER CLICKS LOGOUT, WE NEED TO KNOW WHICH SERVICE THE USER WANTS TO LOGOUT FROM
    * RUSSESAMFUNNET_LOGOUT()
    * FACEBOOK_LOGOUT()
    * GOOGLE_LOGOUT()
*/

// </LOGOUT>