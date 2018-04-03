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
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

        <meta name="google-signin-client_id" content="906320627350-4b7lhkufslsljv9et2soi2i49ektmv6k.apps.googleusercontent.com">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <script src="JavaScript/mainScript.js"></script>
        <script src="JavaScript/Scoreboard.js"></script>
        
        <link rel="stylesheet" type="text/css" href="CSS/main.css">
        <link rel="stylesheet" type="text/css" href="CSS\custombootstrap.css">
        
    </head>
    <body onload="Scoreboard">
        <div class="row">
            <div class="col-12 col-m-12">
                <?php include 'Templates/navigation.php';?>
            </div>
        </div>
        <div class="row">
    <div class="col-2 col-m-2"></div>
    <div class="col-7 col-m-9" style="border-color: gray;">
        
        <table id="table" class="table table-striped">
          <thead class="thead-">
                <tr>
                  <th scope="col">Posisjon</th>
                  <th scope="col">Navn</th>
                  <th scope="col">Poeng</th>
                </tr>
          </thead>
      </table>
                
            
        </div>
    <div class="col-3 col-m-12">...</div>
    </div>
    
        <div class="row">
            <div class="col-4"><p></p></div>
            <div class="col-4 col-m-12"><?php include 'Templates/footer.php';?></div>
            <div class="col-4"><p></p></div>
    
        </div>
        
    </body>
</html>
