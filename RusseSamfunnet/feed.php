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
        <script src="JavaScript/feed.js"></script> 

        <!--<link rel="stylesheet" type="text/css" href="CSS/main.css">-->
        <link rel="stylesheet" type="text/css" href="CSS/custombootstrap.css">
        <link rel="stylesheet" type="text/css" href="CSS/feed.css">
          
        <script>
        /*
            function getInfoForPage(){
                console.log("is this code executed?");
                // fetch data from the rest api and add the data to the page.
            }
            */
        </script>
    </head>
    <body>
    <div id="wrap">
        <div class="col-12 col-m-12">
        <?php include 'Templates/navigation.php';?>
    </div>
        <div id="feedItems" class="container feedContainer">

            <div class="container col-7 col-m-7 feedStyle feedInput">
                <div id="messageInput">
                    <form>
                        <textarea id="messageTextarea"></textarea>                    
                    </form>
                </div>
                <div id="messageInputButton">
                    <a href="#" onclick="postNewMessageToFeed(); return false;"><img src="icons/confirm2.PNG" id="messageConfirmButton"/></a>
                </div>
            </div>
            <br style="clear: both; margin-bottom: 20px;">
            <!--<div class="container col-7 col-m-7 feedStyle">
                <div class="theMessageSender">
                    <div class="theSendersName">
                        Kristian Flisnes Hustad
                    </div>
                    <div class="deleteButton">
                        <a href="#" onclick="deleteMessage(); return false;">X</a>
                    </div>
                </div>
                <div class="theMessage">
                    Lan-party på L167 kl. 08:15 - 14:45, skjermer på rommet, BYOC
                </div>
                <div class="theMessageTimestamp">
                    09:02:42 - 10.04.2018
                </div>
            </div>-->
            
        </div>
        <div class="container col-7 col-m-7 feedStyle">
            <a href="#" onclick="showMore(); return false;">Vis flere</a>
        </div>
      <div class="footer">
        <p>footer footer fdhsjfkds</p>
    </div>  
    </div> 
    
    </body>
</html>
