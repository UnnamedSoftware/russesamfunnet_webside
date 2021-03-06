<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Russesamfunnet</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="CSS/normalize.css">
        <link rel="stylesheet" type="text/css" href="CSS/login.css">
        
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

        <!--<meta name="google-signin-client_id" content="906320627350-4b7lhkufslsljv9et2soi2i49ektmv6k.apps.googleusercontent.com">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>-->
        <link rel="stylesheet" type="text/css" href="CSS\custombootstrap.css">

        <script src="JavaScript/loginScript.js"></script>
        <script src="JavaScript/sha256.js"></script>
    </head>

    <body>
    <div id="blurEffect" class="outer">
        <div class="middle">
            <div class="inner">
                <div id="loginForm" class="container">
                    <img src="logos/logo.png" height="250" style="height: 250px; text-align: center;"/>
                    <h3 class="text-center">Logg inn</h3>
                    <form>
                        <div class="form-group">
                            <label for="username">E-post<span class="errorMessage" id="emailError" style="display: none;"></span></label>
                            <input type="text" class="form-control" id="email" placeholder="e-post" >
                        </div>
                        <div class="form-group">
                            <label for="password">Passord<span class="errorMessage" id="passwordError" style="display: none"></span></label>
                            <input type="password" class="form-control" id="password" placeholder="passord">
                        </div>
                        <div style="height: 10px;">
                        </div>
                        <button type="button" class="btn btn-primary rightButton" onclick="auth()">Login</button>
                            <button type="button" class="btn btn-primary leftButton" onclick="location.href='registration.php';">Registrer ny bruker</button>
                    </form> 
                    <div style="height: 80px;">
                    </div>
                            
                    <div style= "width: 240px; margin: auto;">
                        <div onlogin="completeFBLogin()" class="fb-login-button" data-width="200px" data-max-rows="1" data-size="large" 
                                data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" 
                                data-use-continue-as="true">
                            Logg inn med Facebook
                        </div>
                        <!--<button id="loginBtn" onclick="completeFBLogin()">Facebook Login</button>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
<!--<button onclick="login()">Login with facebook</button>-->