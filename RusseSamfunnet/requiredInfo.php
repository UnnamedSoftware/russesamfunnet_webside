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

        <meta name="google-signin-client_id" content="906320627350-4b7lhkufslsljv9et2soi2i49ektmv6k.apps.googleusercontent.com">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <script src="JavaScript/registerFacebookInfo.js"></script>
    </head>

    <body>
    <div id="blurEffect" class="outer">
        <div class="middle">
            <div class="inner">
                <div id="loginForm" class="container">
                    <img src="logos/logo.png" height="250" style="height: 250px; text-align: center;"/>
                    <h3 class="text-center">Ekstra informasjon om deg</h3>
                    <form>
                        <div class="form-group">
                            <label for="email"><span class="errorMessage2" id="emailError" style="display: none;"></span>E-post</label>
                            <input type="text" class="form-control" id="email" placeholder="E-post">
                        </div>
                        <div class="form-group">
                            <label for="skole"><span class="errorMessage2" id="schoolError" style="display: none;"></span>Din skole</label>
                            <input class="form-control" id="schoolName" list="schools" name="schools" placeholder="Din skole">
                            <datalist id="schools">
                                <!--<option value="Skole nr 1">
                                <option value="Borgund vgs">
                                <option value="Skole nr 3">
                                <option value="Skole nr 4">
                                <option value="Skole nr 5">-->
                            </datalist>
                        </div>
                        <div class="form-group">
                            <label for="russYear"><span class="errorMessage2" id="russYearError" style="display: none;"></span>Russeår (eks. 2018)</label>
                            <input type="text" class="form-control" id="russYear" placeholder="Russeår" >
                        </div>
                        <div class="form-group">
                            <label for="birthdate"><span class="errorMessage2" id="bornError" style="display: none;"></span>Født (ddmmåååå)</label>
                            <input type="text" class="form-control" id="birthdate" placeholder="Født" >
                        </div>
                        <div style="height: 20px;"></div>
                        <button type="button" class="btn btn-primary leftButton" onclick="logout()">Avbryt</button>
                        <button type="button" class="btn btn-primary rightButton" onclick="testRegisterFacebookUser()">Fullfør registrering</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>