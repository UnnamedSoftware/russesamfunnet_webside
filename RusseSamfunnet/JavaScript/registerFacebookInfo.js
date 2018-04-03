var token = "";

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function setCookieFB(name,value,seconds) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds*1000));
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

window.onload = function(){
    facebookInit();
    //setToken();

    //setTimeout(function(){
    //    console.log("in set timeout " + token);
    //},2000);

    //console.log("on load " + token);
}

function getURL(){
    return "http://158.38.101.146:8080/";
}

function cancelRegisterFacebookUser(){
    logout();
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
            //alert("logging out of FB");
            window.location.href = 'index.php';
        }, 1500);
    });

    setTimeout(function () {
        //alert("logging out of FB");
        window.location.href = 'index.php';
    }, 1500);
}

function registerFacebookUser(){
    var url = getURL();
    var email = document.getElementById('email').value;
    var schoolName = document.getElementById('schoolName').value;
    var russYear = document.getElementById('russYear').value;
    var birthdate = document.getElementById('birthdate').value;
    console.log(email + ", " + schoolName + ", " + russYear + ", " + birthdate);
    
    console.log("token id register " + token); email, schoolName, russYear, birthdate
    
    var registerFacebookUserURL = url+"facebookRegisterNew?accessToken="+token+"&email="+email+"&schoolId="+schoolName+"&russYear="+russYear+"&birthdate="+birthdate;
    console.log(registerFacebookUserURL);
    var client = new HttpClient();
    client.get(registerFacebookUserURL, function (response) {
        JSONresponse = JSON.parse(response);
        console.log(JSONresponse);
        if(JSONresponse.loginStatus = 'User successfully registered'){
            setTimeout(function(){
                window.location.href = "feed.php";
            },1000);
            
        }
        if(JSONresponse.loginStatus = 'There is no school with that name'){
            console.log("This school is not registered in the database");
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

function facebookInit() {
    FB.init({
        appId      : '291199641408779', //'406426833123738',
        cookie     : true, 
        xfbml      : true,
        version    : 'v2.12'
    });
    FB.getLoginStatus(function(response){
        console.log(response);
        if(response.status === 'connected'){
            console.log(response.status + " *** CONNECTED (INIT) ***");     
            token = response.authResponse.accessToken;
            //getInfo();
        } else if(response.status === 'not_authorized') {
            console.log(response.status + " *** NOT_AUTHORIZED (INIT) ***");   
        } else {
            console.log(response.status  + " *** ELSE (INIT) ***");
        }
    });
}

function setToken(){
    FB.init({
        appId      : '291199641408779', //'406426833123738',
        cookie     : true, 
        xfbml      : true,
        version    : 'v2.12'
    });


    FB.getLoginStatus(function(response){
        console.log(response);
        if(response.status === 'connected'){
            //token = response.authResponse.accessToken;
            //console.log("hi " + response.authResponse.accessToken);
            //return response.authResponse.accessToken;
            //console.log(response.status + " *** CONNECTED (INIT) ***");     
            //getInfo();
        } else if(response.status === 'not_authorized') {
            console.log(response);
            //console.log(response.status + " *** NOT_AUTHORIZED (INIT) ***");   
        } else {
            console.log(response);
            //console.log(response.status  + " *** ELSE (INIT) ***");
        }
    });
}
(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));