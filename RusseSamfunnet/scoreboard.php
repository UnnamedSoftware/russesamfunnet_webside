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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

        <meta name="google-signin-client_id" content="906320627350-4b7lhkufslsljv9et2soi2i49ektmv6k.apps.googleusercontent.com">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <script src="JavaScript/mainScript.js"></script>
        <script src="JavaScript/feed.js"></script> 
    </head>
    <body>
        <div class="row">
            <div class="col-12 col-m-12">
                <?php include 'Templates/navigation.php';?>
            </div>
        </div>
        <div class="row">
    <div class="col-2 col-m-2"></div>
    <div class="col-7 col-m-9">
        <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Default</td>
                  <td>Defaultson</td>
                  <td>def@somemail.com</td>
                </tr>      
                <tr class="success">
                  <td>Success</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                </tr>
                <tr class="danger">
                  <td>Danger</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                </tr>
                <tr class="info">
                  <td>Info</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
                </tr>
                <tr class="warning">
                  <td>Warning</td>
                  <td>Refs</td>
                  <td>bo@example.com</td>
                </tr>
                <tr class="active">
                  <td>Active</td>
                  <td>Activeson</td>
                  <td>act@example.com</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
    <div class="col-3 col-m-12">...</div>
        </div>
        <div class="row">
            <div class="col-12 col-m-12"><p>footer</p></div>
    
        </div>
        
    </body>
</html>
