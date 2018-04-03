// loginstatus
/*
    loginStatus
    accessToken
    expirationdate
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
    // må fa en liste med skoler for å fylle inn i dropdown tabellen
    /*russasamfunnetRegister ? email = " + email.getText()
        + "&password=" + password.getText()
        + "&schoolId=" + 1
        + "&firstName=" + firstName.getText()
        + "&lastName=" + */
}





function register() {
    console.log("register");

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var schoolName = document.getElementById('schoolName').value;
    console.log(email + ", " + password + ", " + confirmPassword + ", " + schoolName);


    var url = "http://158.38.101.146:8080/russasamfunnetRegister?email=" + email + "&password=" + password + "&schoolId=" + 1 + "&firstName=" + firstName + "&lastName=" + lastName;
    console.log(url);
    var client = new HttpClient();
    client.get(url, function (response) {
        console.log(response);
        responseAsJSON = JSON.parse(response);
        console.log(responseAsJSON);
        var accessToken = responseAsJSON.accessToken;
        var loginStatus = responseAsJSON.loginStatus;
        var expiresInDays = responseAsJSON.expiresInDays
        console.log(accessToken);
        setCookie("Russesamfunnet", "russesamfunnet", expiresInDays)
        setCookie("Russesamfunnet-token", accessToken, expiresInDays);
        setTimeout(function(){
            window.location.href = "feed.php";
        }, 1000);
    });
}

// pKOHsMEXCM1bqfvxnNZGaxxkvtOBAbX2VqvL4wPStMk9atrBtUZxUcd/OeAMLr516+ITQhUym9SBra9e2U8ghWBQF2zO7v10rFaQzISXNZiUUVJj8bWe6MLiwjOzZlXZmpdJN/fPB3A=
// dI/f3o9f6jBpgh2Y1z30LNAt0pLV4zSgkcUxwh14y2GuKbsf6ICnJ267WWn9+vUdyEkMt/pZs2NsnnJ0IUtn5Tt2NefyMC+mIKe/8fu3C9hwN1iJ1saAYY1wI4EG4XybVQDdf5Kj7u0=
// RN2nvUY8sycKEBeXMIrDqUlcBgFQhbPKxCiQm7wDj6QAJ/4HTnyRZBShdM373qQQh494t3evoiOJRM5M2JdPs+rjxHx0FnpsQqw8tDh7EuswZAQ9VyQz67W1BlOfFwy4ZuaeYTlRmjU=