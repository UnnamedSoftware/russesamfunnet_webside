/*   JAVASCRIPT CODE SPECIFIC TO THE KNOTS.PHP WEB PAGE    */

  var httpRequest;
  
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

       $("#table").append(tr+td2+td3+td4); 

    }
    }
    
    

function getInfoForPage(){
    console.log("is this code executed? knots.js");
    getUserInfo();
    getKnots();
    
    }
    
function getUserInfo(){
    console.log("Getting user info and adding it to the page");

    

}

function getKnots(){
    console.log("Getting the knots for this user and adding it to the page");
    console.log("TEST");
   makeRequest();
    
}

function getKnot(){
    console.log("User have clicked a knot and is redirected to a new page for that specific knot, there the user can register"
    + " the knot a done and register 1 or 2 witnesses");
}

function loadInfo(){
    
}
            
