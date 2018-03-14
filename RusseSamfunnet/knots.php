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
        <link rel="stylesheet" type="text/css" href="CSS/main.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

        <meta name="google-signin-client_id" content="906320627350-4b7lhkufslsljv9et2soi2i49ektmv6k.apps.googleusercontent.com">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <script src="JavaScript/mainScript.js"></script>
        <script src="JavaScript/knots.js"></script>
        
    </head>
    <body onload="getInfoForPage()">
        <div class="row">
            <div class="col-12 col-m-12">
                <?php include 'Templates/navigation.php';?>
            </div>
        </div>
        <div class="row">
    <div class="col-2 col-m-2"></div>
    <div class="col-7 col-m-9">

      <table class="table table-bordered">
          <thead>
                <tr>
                  <th scope="col">Knute</th>
                  <th scope="col">Description</th>
                </tr>
          </thead>
      </table>
                
        </div>
    <div class="col-3 col-m-12">...</div>
        </div>
        <div class="row">
            <div class="col-12 col-m-12"><p>footer</p></div>
    
        </div>
        
        <button id="ajaxButton" type="button">Make a request</button>

<script>
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'http://158.38.101.146:8080/knots?russId=1');
    httpRequest.send();
    
    }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
          
          makeTable(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
  
  function makeTable(x){
      
      var obj = JSON.parse(x);
      
  var tbl=$("<table/>").attr("id","table");
    $("#div1").append(tbl);
    for(var i=0;i<obj.length;i++)
    {
        var tr="<tr>";
        var td2="<td>"+obj[i]["knotName"]+"</td>";
        var td3="<td>"+obj[i]["knotDetails"]+"</td>";
        var td4="<td>"+obj[i]["knotPicture"]+"</td>\n\</tr>";

       $(".table").append(tr+td2+td3+td4); 

    }
    }
    
})();
</script>

    </body>
</html>
