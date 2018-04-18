<html>
    <head>
      
        <script>
            var filename = "";
    var russeId = "test";

    function generateFilename(){
        filename = russeId + "profil" + ".jpg";
    }

    function onClickUpload(){ 
        alert("resrr");
    generateFilename();
    var selectedFile = document.getElementById('input').files[0];

    var formData = new FormData("file",selectedFile);
        alert("resrr");
    console.log(filename);

    var request = new XMLHttpRequest();
  
    request.open("POST", "http://localhost:8090/upload");
    formData.append('name', 'testing.jpg');

    request.send(formData);
    alert(request);

    alert("check");

    }
    
    
        </script>
        
        
    </head>
<body>
	<div>
            <form action="" method="post" enctype="multipart/form-data"
    onsubmit="onClickUpload(); return false;">
			<table>
				<tr><td>File to upload:</td><td><input type="file" name="file" id="input" /></td></tr>
                                <tr><td><input value="test69.jpg" type="hidden" name="name" id="name" /></td></tr>
                                <tr><td></td><td><input type="submit" value="Upload" onclick="onClickUpload()" /></td></tr>
			</table>
                         <img src="http://localhost:8090/files/testing.jpg" alt="Smiley face" height="42" width="42">
		</form>
	</div>

</body>



</html>
