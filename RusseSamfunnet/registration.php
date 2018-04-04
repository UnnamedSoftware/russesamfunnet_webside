<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Standard Template</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="CSS/normalize.css">
        <link rel="stylesheet" type="text/css" href="CSS/main.css">
        <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
        
        
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src="JavaScript/registratonScript.js"></script>
        <script type="text/javascript">
            /*
                function auth(){
                    
                var url = 'http://158.38.101.146:8080/login?email=' + document.getElementById('email').value + "&password=" + document.getElementById('password').value
                var client = new HttpClient();
                    client.get(url, function(response) {
                        document.write(function(response).getOwnPropertyNames());
                        
                });
            }
            
                var HttpClient = function() {
                    this.get = function(aUrl, aCallback) {
                    var anHttpRequest = new XMLHttpRequest();
                    anHttpRequest.onreadystatechange = function() { 
                    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
                        }

                anHttpRequest.open( "GET", aUrl, true );            
                anHttpRequest.send( null );
                    }
                }*/
        </script>
    </head>
    <body>
    <div id="blurEffect">
        <div class="container">
            <div class="extraInfoMargin"></div>
            <div id="loginForm">
                <img src="logos/logo.png"/>
                <h3 class="text-center">Registrer deg</h3>
                <form>
                    <div class="form-group">
                        <label for="firstName">Fornavn</label>
                        <input type="text" class="form-control" id="firstName" placeholder="fornavn" >
                    </div>
                    <div class="form-group">
                        <label for="lastName">Etternavn</label>
                        <input type="text" class="form-control" id="lastName" placeholder="etternavn" >
                    </div>
                    <div class="form-group">
                        <label for="username">E-post</label>
                        <input type="text" class="form-control" id="email" placeholder="E-mail" >
                    </div>
                    <div class="form-group">
                        <label for="password">Passord</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <label for="password">Bekreft passord</label>
                        <input type="password" class="form-control" id="confirmPassword" placeholder="Password">
                    </div>

                    <!--<div class="form-group">
                        <label for="school">Velg skole</label>
                        <input type="text" class="form-control" id="school" placeholder="Begynn å skriv for valg">
                    </div>-->

                    <div class="form-group">
                        <label for="skole">Din skole</label>
                        <!--<input type="text" class="form-control" id="schoolId" placeholder="Din skole">
-->
                        <input class="form-control" id="schoolName" list="schools" name="schools" placeholder="Begynn å skriv for valg">
                        <datalist id="schools">
                            <!--<option value="Skole nr 1">
                            <option value="Borgund vgs">
                            <option value="Skole nr 3">
                            <option value="Skole nr 4">
                            <option value="Skole nr 5">-->
                        </datalist>
                    </div>

                    <div style="height: 10px;"></div>
                    <button type="button" class="btn btn-primary leftButton" onclick="location.href='index.php';">Avbryt</button>
                    <button type="button" class="btn btn-primary rightButton" onclick="register(); return false;">Registrer konto</button>
        
                </form>
                <!--<div id="token-display"></div>-->
            </div>
            <div class="extraInfoMargin"></div>
        </div>
        
        
        
        </div>
    </body>
</html>