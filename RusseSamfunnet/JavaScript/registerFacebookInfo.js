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
    getSchoolOptions();
    //setToken();

    //setTimeout(function(){
    //    console.log("in set timeout " + token);
    //},2000);

    //console.log("on load " + token);
}

function getSchoolOptions() {
    var url = "http://158.38.101.146:8080/getAllSchools";
    //console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        var schoolList = document.getElementById('schools');
        responseAsJSON = JSON.parse(response);
        //console.log(responseAsJSON);
        for (i = 0; i < responseAsJSON.length; i++) {
            var schoolOption = document.createElement('option');
            schoolOption.setAttribute("value", responseAsJSON[i].schoolName);
            schoolList.appendChild(schoolOption);
        }
    });
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

function testRegisterFacebookUser(){
    //alert("In test register facebook user");
    var url = getURL();

    var emailError = document.getElementById('emailError');
    var schoolError = document.getElementById('schoolError');
    var russYearError = document.getElementById('russYearError');
    var bornError = document.getElementById('bornError');

    emailError.style.display = "none";
    schoolError.style.display = "none";
    russYearError.style.display = "none";
    bornError.style.display = "none";

    var email = document.getElementById('email').value;
    var schoolName = document.getElementById('schoolName').value;
    var russYear = document.getElementById('russYear').value;
    var birthdate = document.getElementById('birthdate').value;

    if(email == ""){
        //console.log("Email");
        emailError.innerHTML = "!";
        emailError.style.display = "inline-block";
    } if(schoolName == ""){
        schoolError.innerHTML = "!";
        schoolError.style.display = "inline-block";
    } if(russYear == ""){
        russYearError.innerHTML = "!";
        russYearError.style.display = "inline-block";
    } else if(Number.isInteger(+russYear) == false){
        //console.log(Number.isNaN(russYear) + " Not an integer! " + russYear);
        russYearError.innerHTML = "Må være et tall!";
        russYearError.style.display = "inline-block";
    } else if(Number.isInteger(+russYear) && russYear.length != 4){
        //console.log("Interger but wrong length!");
        russYearError.innerHTML = "Feil lengde!";
        russYearError.style.display = "inline-block";
    } if (birthdate == "") {
        bornError.innerHTML = "!";
        bornError.style.display = "inline-block";
    }  else if(Number.isInteger(+birthdate) == false){
        //console.log(Number.isNaN(russYear) + " Not an integer! " + russYear);
        bornError.innerHTML = "Må være et tall!";
        bornError.style.display = "inline-block";
    } else if(Number.isInteger(+birthdate) && birthdate.length != 8){
        //console.log("Interger but wrong length!");
        bornError.innerHTML = "Feil lengde!";
        bornError.style.display = "inline-block";
    }
    
    if ((email!="") && (schoolName!="") && (russYear!="") && (birthdate!="")) {
        //alert("In register facebook user 2");
        var registerFacebookUserURL = url + "facebookRegisterNew?accessToken=" + token + "&email=" + email + "&schoolId=" + schoolName + "&russYear=" + russYear + "&birthdate=" + birthdate;
        console.log(registerFacebookUserURL);
        var client = new HttpClient();
        client.get(registerFacebookUserURL, function (response) {
            console.log(response);
            //alert("In register facebook user3");
            JSONresponse = JSON.parse(response);
            //alert("check console");
            console.log(JSONresponse);
            //alert("In register facebook user4");
            if (JSONresponse.loginStatus == 'User successfully registered') {
                setCookie("Russesamfunnet-id", JSONresponse.userId, 7);
                alert("In register facebook user5");
                setTimeout(function () {
                    alert("check console");
                }, 1000);
            }
            if (JSONresponse.loginStatus == 'There is no school with that name') {
                console.log("This school is not registered in the database");
            }
        });
    }
}

function registerFacebookUser(){
    alert("In register facebook user");
    var url = getURL();
    var email = document.getElementById('email').value;
    var schoolName = document.getElementById('schoolName').value;
    var russYear = document.getElementById('russYear').value;
    var birthdate = document.getElementById('birthdate').value;
    console.log(email + ", " + schoolName + ", " + russYear + ", " + birthdate);
    
    console.log("token id register " + token); email, schoolName, russYear, birthdate
    alert("In register facebook user 2");
    var registerFacebookUserURL = url+"facebookRegisterNew?accessToken="+token+"&email="+email+"&schoolId="+schoolName+"&russYear="+russYear+"&birthdate="+birthdate;
    console.log(registerFacebookUserURL);
    var client = new HttpClient();
    client.get(registerFacebookUserURL, function (response) {
        alert("In register facebook user3");
        JSONresponse = JSON.parse(response);
        alert("check console");
        console.log(JSONresponse);
        alert("In register facebook user4");
        if(JSONresponse.loginStatus = 'User successfully registered'){
            setCookie("Russesamfunnet-id", JSONresponse.userId, 7);
            alert("In register facebook user5");
            setTimeout(function(){
                alert("check console");
                //window.location.href = "feed.php";
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