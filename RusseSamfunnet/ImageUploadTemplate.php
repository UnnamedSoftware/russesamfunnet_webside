<html>
    <head>
      
        <script src="JavaScript/userProfile.js"></script>
        
        
    </head>
<body>
	<div>
            <form method="POST" enctype="multipart/form-data" action="http://localhost:8090/upload">
			<table>
				<tr><td>File to upload:</td><td><input type="file" name="file" id="input" /></td></tr>
                                <tr><td><input value="test69.jpg" type="hidden" name="name" id="name" /></td></tr>
                                <tr><td></td><td><input type="submit" value="Upload" onclick="onClickUpload()" /></td></tr>
			</table>
                         <img src="http://localhost:8090/files/test123.jpg" alt="Smiley face" height="42" width="42"> 
		</form>
	</div>

</body>



</html>
