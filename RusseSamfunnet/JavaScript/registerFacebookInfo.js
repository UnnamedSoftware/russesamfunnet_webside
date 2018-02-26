var token = "";

window.onload = function(){
    //facebookInit();
    setToken();

    setTimeout(function(){
        console.log("in set timeout " + token);
    },2000);

    //console.log("on load " + token);
}

function getURL(){
    return "http://158.38.101.146:8080/";
}

function registerFacebookUser(){
    let url = getURL();
    let birthdate = document.getElementById('birthdate').value;
    let schoolId = document.getElementById('schoolId').value;
    console.log("token id register " + token);
    let registerFacebookUserURL = url+"facebookRegister?accessToken="+token+"&birthdate="+birthdate+"&schoolId="+schoolId;
    console.log(registerFacebookUserURL);
    let client = new HttpClient();
    client.get(url, function(response){
        JSONresponse = JSON.parse(response);
        console.log(JSONresponse);
        if(JSONresponse.loginStatus = 'User successfully registered'){
            window.location.href = "feed.php";
        }
        if(JSONresponse.loginStatus = 'There is no school with that name'){
            console.log("This school is not registered in the database");
        }

    });


    //facebookRegister?accessToken=token&birthdate=dob&schoolId=id

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

};

(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function setToken(){
    FB.init({
        appId      : '291199641408779', //'406426833123738',
        cookie     : true, 
        xfbml      : true,
        version    : 'v2.12'
    });


    FB.getLoginStatus(function(response){
        if(response.status === 'connected'){
            token = response.authResponse.accessToken;
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