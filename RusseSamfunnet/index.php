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
        <link rel="stylesheet" type="text/css" href="CSS/normalize.css">
        <link rel="stylesheet" type="text/css" href="CSS/main.css">
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script type="text/javascript">
           
            function auth(){
                
            var url = 'http://158.38.101.146:8080/login?email=' + document.getElementById('email').value + "&password=" + document.getElementById('password').value
            var client = new HttpClient();
                client.get(url, function(response) {
                    document.write(response);
                    
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
    </head>
    <body>
        <h3 class="text-center">Authentication</h3>
        <div class="container">
            <form>
                <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="email" placeholder="E-mail" >
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <button type="button" class="btn btn-primary center-block" onclick="auth()">Submit</button>
            </form>
            <div id="token-display">
            </div>
        </div>
       
        
            
    </body>
</html>