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
<<<<<<< HEAD
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
=======
        <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
        
        
>>>>>>> f4a9f859002d83ad318b5518f9a4578be385ef8d
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<<<<<<< HEAD

        <meta name="google-signin-client_id" content="906320627350-4b7lhkufslsljv9et2soi2i49ektmv6k.apps.googleusercontent.com">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <script src="JavaScript/loginScript.js"></script>
=======
    <script type="text/javascript">
           
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
            }
        </script>
        
        

>>>>>>> f4a9f859002d83ad318b5518f9a4578be385ef8d
    </head>










    <body>
        <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/nn_NO/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

        <h3 class="text-center">Login eller registrer deg</h3>
        <div class="container">
            <form>
                <div class="form-group">
                <label for="username">E-post</label>
                <input type="text" class="form-control" id="email" placeholder="E-mail" >
                </div>
                <div class="form-group">
                    <label for="password">Passord</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <button type="button" class="btn btn-primary" onclick="auth()">Login</button>
                <text>eller</text>
                <button type="button" class="btn btn-primary" onclick="location.href='registration.php';">Registrer konto</button>
                <div class="fb-login-button" data-width="200px" data-max-rows="1" data-size="large" 
                     data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" 
                     data-use-continue-as="false">
                </div>
                
                <div id="my-signin2"></div>
                <script>
                  function onSuccess(googleUser) {
                    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
                  }
                  function onFailure(error) {
                    console.log(error);
                  }
                  function renderButton() {
                    gapi.signin2.render('my-signin2', {
                      'scope': 'profile email',
                      'width': 100,
                      'height': 35,
                      'longtitle': false,
                      'theme': 'light',
                      'onsuccess': onSuccess,
                      'onfailure': onFailure
                    });
                  }
                </script>
                <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>

                
                
            </form>
            <br><br>
            Dersom du ikke har en bruker allerede kan du trykke <a href="register.php">HER</a> for å logge inn
            <br><br>
            <!-- <div id="status"></div><br>
            <div id="status2"></div> --><br>
            <!--<button onclick="getInfo()">Get Info</button>-->
            <button onclick="login()">Login with facebook</button>
            <!--<button onclick="logout()">logout</button>-->

            <br><br>
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
            <div class="data">
            <!--<p>Profile Details</p>
            <img id="pic" class="img-circle" width="100" height="100"/>
            <p>Email address</p>
            <p id="email" class="alert alert-danger"></p>
            <button onclick="signOut()" class="btn btn-danger">Sign out</button>-->
        </div>
            <br>


            <!--<div id="token-display">
                <p id="authResult">No result</p>
            </div>-->
        </div>
       
        
<<<<<<< HEAD








=======
        
            
>>>>>>> f4a9f859002d83ad318b5518f9a4578be385ef8d
    </body>
</html>