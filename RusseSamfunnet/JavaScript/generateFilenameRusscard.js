var filename = "";
var russeId = "default";
var picturetype = "card"

function generateFilenameCardPicture(){
    
    filename = russeId + "card" + ".jpg";
    document.getElementById('name').value=filename;
    document.forms[0].submit();
    sendFilenameToServer(filename, picturetype);
}