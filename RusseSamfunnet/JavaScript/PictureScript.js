var form = new FormData();
form.append("file", "ak443a.JPG");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8090/",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});