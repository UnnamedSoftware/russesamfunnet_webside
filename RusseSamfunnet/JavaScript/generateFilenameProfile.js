var filename = "";
var russeId = "default";
var picturetype = "profile"

function generateFilenameProfilePicture(){
    
    filename = russeId + "profil" + ".jpg";
    document.getElementById('name').value=filename;
    document.forms[0].submit();
    sendFilenameToServer(filename, picturetype);
}