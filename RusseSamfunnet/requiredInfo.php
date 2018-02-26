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
        
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

        <meta name="google-signin-client_id" content="906320627350-4b7lhkufslsljv9et2soi2i49ektmv6k.apps.googleusercontent.com">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <script src="JavaScript/registerFacebookInfo.js"></script>
    </head>

    <body>

        <h3 class="text-center">Registrer ekstra informasjon om deg</h3>
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="birthdate">Født</label>
                    <input type="text" class="form-control" id="birthdate" placeholder="Født" >
                </div>
                <div class="form-group">
                    <label for="skole">Din skole</label>
                    <input type="text" class="form-control" id="schoolId" placeholder="Din skole">
                </div>
                <button type="button" class="btn btn-primary" onclick="registerFacebookUser()">Fullfør registrering</button>
                
            </form>
            </div>
        </div>
    </body>
</html>