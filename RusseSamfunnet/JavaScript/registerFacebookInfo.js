var token = "";

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