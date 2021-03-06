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

        <script src="JavaScript/userProfile.js"></script>
       
        <link rel="stylesheet" type="text/css" href="CSS/custombootstrap.css">
        <link rel="stylesheet" type="text/css" href="CSS/profile.css">

    </head>
    <body>
        <div id="wrap">
                <div class="col-12 col-m-12">
                    <?php include 'Templates/navigation.php';?>
                </div>
            <div class="container mainContent">
                <div class="row imagesRow">
                    <div class="col-5 col-m-5">
                        <div id="profilePicture" style="overflow: hidden;">
                            <img src="images/profile3.png" height="300" style="max-height:300px; height: 300px; text-align: center;"  id="profilePictureImage"/>
                        </div>
                        <a href="#" onclick="toggleChangeProfilePopup(); return false;">Bytt profilbilde</a>
                        <div id="changeProfilePopup" style="display: none;">
                            <form method="POST" enctype="multipart/form-data" onsubmit="generateFilenameProfilePicture(); return false;">
                                <table>
                                        <tr><td></td><td><input type="file" name="file" id="inputProfile" /></td></tr>
                                        <tr><td><input value="" type="hidden" name="name" id="name" /></td></tr>
                                        <tr><td></td><td><input type="submit" value="Upload"/></td></tr>
                                </table>
                        </form>
                        </div>
                    </div>
                    <div class="col-7 col-m-7">
                        <div id="russCard" style="overflow: hidden;">
                            
                            <img src="images/russekort.jpg" height="300" style="max-height:300px; height: 300px; text-align: center;"  id="russCardImage"/>
                            <a href="#" onclick="toggleChangeCardPopup(); return false;">Bytt russekortbilde</a>
                        </div>
                        <div id="changeCardPopup" style="display: none;">
                            <form method="POST" enctype="multipart/form-data" onsubmit="generateFilenameCardPicture(); return false;">
                                <table>
                                        <tr><td></td><td><input type="file" name="file" id="inputCard" /></td></tr>
                                        <tr><td><input value="" type="hidden" name="name" id="cardname" /></td></tr>
                                        <tr><td></td><td><input type="submit" value="Upload"/></td></tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row infoRow">
                    <div class="col-5 col-m-5">
                        <div id="userInfo">
                            <h3>Om deg</h3>
                            <div id="userInfoContent">
                            </div>
                        </div>
                        <div id="groups">
                            <h3>Grupper (<span id="numOfGroups">0</span>)</h3>
                            <div id="groupsContent">
                            </div>
                        </div>
                    </div>
                    <div class="col-7 col-m-7">
                        <div id="knots">
                            <h3>Russeknuter du har gjennomført (<span id="numOfKnots">0</span>)</h3>
                            <div id="knotsContent">
                            
                            <table id="knotTable" class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Knute</th>
                                        <th scope="col">Forklaring på knuten</th>
                                    </tr>
                                </thead>
                                <tbody id="knotTableBody">
                                    
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p>Kontakt oss på e-post: Russesamfunnet@gmail.com</p>
            </div> 
        </div>
    </body>
</html>
