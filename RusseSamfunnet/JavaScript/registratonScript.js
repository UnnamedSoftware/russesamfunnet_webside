function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function setCookieFB(name, value, seconds) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
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

window.onload = function () {
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

function register() {
    //console.log("register");
    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
    var schoolError = document.getElementById('schoolError');
    
    firstNameError.style.display = "none";
    lastNameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    confirmPasswordError.style.display = "none";
    schoolError.style.display = "none";

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    //console.log("password length: " + password.length);
    var confirmPassword = document.getElementById('confirmPassword').value;
    var schoolName = document.getElementById('schoolName').value;

    if(firstName == ""){
        console.log("firstName NULL");
        firstNameError.innerHTML = "!";
        firstNameError.style.display = "inline-block";
    } if(lastName == ""){
        console.log("lastName NULL");
        lastNameError.innerHTML = "!";
        lastNameError.style.display = "inline-block";
    } if(email == ""){
        console.log("email NULL");
        emailError.innerHTML = "!";
        emailError.style.display = "inline-block";
    } if(password == ""){
        console.log("confirmPassword NULL");
        passwordError.innerHTML = "!";
        passwordError.style.display = "inline-block";
    } if(password.length < 8){
        console.log("for kort password");
        passwordError.innerHTML = "For kort (under 8)";
        passwordError.style.display = "inline-block";
    } 
    if(confirmPassword == ""){
        console.log("confirmPassword NULL");
        confirmPasswordError.innerHTML = "!";
        confirmPasswordError.style.display = "inline-block";
    } 
    if(schoolName == ""){
        console.log("schoolName NULL");
        schoolError.innerHTML = "!";
        schoolError.style.display = "inline-block";
    } else if(password != confirmPassword){
        passwordError.innerHTML = "Matcher ikke";
        passwordError.style.display = "inline-block";
    } else{
        var hashedPassword = sha256(password);
        var url = "http://158.38.101.146:8080/russasamfunnetRegister?email=" + email + "&password=" + hashedPassword + "&schoolName=" + schoolName + "&firstName=" + firstName + "&lastName=" + lastName;
        console.log(url);
        var client = new HttpClient();
        client.get(url, function (response) {
            console.log(response);
            //responseAsJSON = JSON.parse(response);
            console.log(responseAsJSON);
            alert("check console!!1");
            var loginStatus = responseAsJSON.loginStatus;
            if (loginStatus == "Login success") {
                var accessToken = responseAsJSON.accessToken;
                var russId = responseAsJSON.russId;
                var expiresInDays = responseAsJSON.expiresInDays
                //console.log(accessToken);
                setCookie("Russesamfunnet", "russesamfunnet", expiresInDays)
                setCookie("Russesamfunnet-token", accessToken, expiresInDays);
                setCookie("Russesamfunnet-id", russId, expiresInDays);
                setTimeout(function () {
                    window.location.href = "feed.php";
                }, 1000);
            }
        });
    }
}