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
                        <textarea id="messageTextarea" placeholder="skriv her!" autofocus></textarea>                    
                    </form>
                </div>
                <div id="messageInputButton">
                    <a href="#" onclick="postNewMessageToFeed(); return false;"><img src="icons/confirm2.PNG" id="messageConfirmButton"/></a>
                </div>
            </div>
            <br style="clear: both; margin-bottom: 20px;">
            <!--
            <div class="col-7 col-m-7 messageContainer">
                <div class="pictureContainer">


                    <div class="image-cropper">
                        <div class="rounded">

                        </div>
                    </div>
                    <div class="headingContainer">
                        <p>Kristian</p> 
                    </div>
                    <img src="icons/cancel.png" class="deleteMessage" height=30 width=30 style="height: 30px; border-radius: 50%;"/>
                    
                    <div class="messageContentContainer" style="">
                        <div class="theMessageContainer">
                        Lan-party på L167 kl. 08:15 - 14:45, skjermer på rommet, BYOC
                        </div>
                    </div>
                </div>
            </div>-->
            <!--<br style="clear: both; margin-bottom: 20px;">
            <div class="col-7 col-m-7 messageContainer">
                <div class="pictureContainer">
                    <img src="images/profile3.png" height=100 width=100 style="height: 100px; border: 2px solid black; border-radius: 50%;"/>
                    <div class="headingContainer">
                        <p>Kristian Flisnes Hustad<p> 
                    </div>
                    <div class="messageContentContainer" style="">
                        <div class="theMessageContainer">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronicwhen an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic
                        </div>
                    </div>
                </div>
            </div>
            <br style="clear: both; margin-bottom: 20px;">
            <div class="col-7 col-m-7 messageContainer">
                <div class="pictureContainer">
                    <img src="images/profile3.png" height=100 width=100 style="height: 100px; border: 2px solid black; border-radius: 50%;"/>
                    <div class="headingContainer">
                        <p>Alexander<p> 
                    </div>
                    <div class="messageContentContainer" style="">
                        <div class="theMessageContainer">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknownd not only five centuries, but also the leap into 
                        electronic
                        </div>
                    </div>
                </div>
            </div>
        -->

<!--
            <br style="clear: both; margin-bottom: 20px;">
            <div class="container col-7 col-m-7 feedStyle">
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
        <p>Kontakt oss på e-post: Russesamfunnet@gmail.com</p>
    </div>  
    </div> 
    
    </body>
</html>
