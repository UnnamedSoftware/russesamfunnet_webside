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
alert(request);
request.open("POST", "localhost:8090");
formData.append('name', 'fuckert123.jpg');
alert(formData);
         
request.send(formData);
alert(request);

alert("check");

}