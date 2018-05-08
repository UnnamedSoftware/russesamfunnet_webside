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
        <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
        
        
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src="JavaScript/registratonScript.js"></script>
        <script src="JavaScript/sha256.js"></script>
    </head>
    <body>
        <div id="blurEffect" class="outer">
            <div class="middle">
                <div class="inner">
                    <div id="loginForm" class="container">
                        <img src="logos/logo.png" height="250" style="height: 250px; text-align: center;"/>
                        <h3 class="text-center">Registrer deg</h3>
                        <form>
                            <div class="form-group">
                                <div class="col-6 col-m-6">
                                    <div class="form-group">
                                        <label for="firstName">Fornavn<span class="errorMessage" id="firstNameError" style="display: none;"></label>
                                        <input type="text" class="form-control" id="firstName" placeholder="fornavn" >
                                    </div>
                                </div>
                                <div class="col-6 col-m-6">
                                    <div class="form-group">
                                        <label for="lastName">Etternavn<span class="errorMessage" id="lastNameError" style="display: none;"></label>
                                        <input type="text" class="form-control" id="lastName" placeholder="etternavn" >
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="username">E-post<span class="errorMessage" id="emailError" style="display: none;"></span></label>
                                <input type="text" class="form-control" id="email" placeholder="e-post" >
                            </div>
                            <div class="form-group">
                                <div class="col-6 col-m-6">
                                    <div class="form-group">
                                        <label for="password">Passord<span class="errorMessageSmall" id="passwordError" style="display: none;"></span></label>
                                        <input type="password" class="form-control" id="password" placeholder="passord">
                                    </div>
                                </div>
                                <div class="col-6 col-m-6">
                                    <div class="form-group">
                                        <label for="password">Bekreft passord<span class="errorMessage" id="confirmPasswordError" style="display: none;"></label>
                                        <input type="password" class="form-control" id="confirmPassword" placeholder="bekreft passord">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="skole">Din skole<span class="errorMessage" id="schoolError" style="display: none;"></label>
                                <input class="form-control" id="schoolName" list="schools" name="schools" placeholder="begynn å skriv for valg">
                                <datalist id="schools">
                                </datalist>
                            </div>
                            <div style="height: 10px;"></div>
                            <button type="button" class="btn btn-primary leftButton" onclick="location.href='index.php';">Avbryt</button>
                            <button type="button" class="btn btn-primary rightButton" onclick="register(); return false;">Registrer konto</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>











