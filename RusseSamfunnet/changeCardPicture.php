<html>
    <head>
        <script src="JavaScript/mainScript.js"></script>
        <script src="JavaScript/picturehandling.js"></script>
        <script src="JavaScript/generateFilenameRusscard.js"></script>
        
    </head>
    <body>
            <div>
                <form method="POST" enctype="multipart/form-data" action="http://158.38.101.162:8080/upload">
                            <table>
                                    <tr><td>File to upload:</td><td><input type="file" name="file" id="input" /></td></tr>
                                    <tr><td><input value="test69.jpg" type="hidden" name="name" id="name" /></td></tr>
                                    <tr><td></td><td><input type="submit" value="Upload" onclick="generateFilenameCardPicture()" /></td></tr>
                            </table>
                             <img src="http://158.38.101.162:8080/files/testing.jpg" alt="Smiley face" height="42" width="42">
                    </form>
                <a href="userprofile.php">Avbryt</a>
            </div>

    </body>
</html>
