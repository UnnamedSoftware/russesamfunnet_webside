/*   JAVASCRIPT CODE SPECIFIC TO THE KNOTS.PHP WEB PAGE    */

  var httpRequest;
  var httpRequest2;
  
  function makeRequest() {
      
    var accessToken = getCookie("Russesamfunnet-token");
    var type = getCookie("Russesamfunnet");
    var url = "http://158.38.101.146:8080/completedKnots?accessToken="+accessToken+"&type="+type;
      
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
    }
    
    function makeSecondRequest() {
      
    var accessToken = getCookie("Russesamfunnet-token");
    var type = getCookie("Russesamfunnet");
    var url = "http://158.38.101.146:8080/getKnotsList?accessToken="+accessToken+"&type="+type;
      
    httpRequest2 = new XMLHttpRequest();

    if (!httpRequest2) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest2.onreadystatechange = alertSecondContents;
    httpRequest2.open('GET', url);
    httpRequest2.send();
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
  
  function alertSecondContents() {
    if (httpRequest2.readyState === XMLHttpRequest.DONE) {
      if (httpRequest2.status === 200) {
          
          
          makeSecondTable(httpRequest2.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
  
  function makeTable(x){
      
      var obj = JSON.parse(x);
      
      console.log("KNUTER have been clicked!");
    
      
  var tbl=$("<table/>").attr("id","table");
    $("#div1").append(tbl);
    $("#table").append("<tbody>");
    for(var i=0;i<obj.length;i++)
    {
        var currentId = obj[i]["knotId"]["knotId"];
        var tr="<tr>";
        var td2="<td>"+obj[i]["knotId"]["knotName"]+"</td>";
        var td3="<td>"+obj[i]["knotId"]["knotDetails"]+"</td>";
        var td4="<td>"+obj[i]["witnessId1"]["firstName"]+ " " +obj[i]["witnessId1"]["lastName"]+ " og " +obj[i]["witnessId2"]["firstName"]+ " " +obj[i]["witnessId2"]["lastName"]+"</td>";
        var td5="<td>"+ '<button type="button"' + "onclick='makeOrder(" + currentId + ")'" + ">X</button>" +"</td>\n\</tr>";

       $("#table").append(tr+td2+td3+td4+td5);

    }
    $("#table").append("</tbody>");
    }
    
    function makeSecondTable(x){
        var obj = JSON.parse(x);
      
      console.log("KNUTER have been clicked!");
    
      
  var tbl=$("<table/>").attr("id","table");
    $("#div1").append(tbl);
    $("#table2").append("<tbody>");
    for(var i=0;i<obj.length;i++)
    {
        var currentId = obj[i]["knotId"];
        var tr="<tr id=" + currentId + ">";
        var td="<td>"+obj[i]["knotName"]+"</td>";
        var td2="<td>"+obj[i]["knotDetails"]+"</td>";
        var td3="<td>"+ '<button type="button"' + "onclick='makeSecondOrder(" + currentId + ")'" + ">X</button>" +"</td>\n\</tr>";
        if (obj[i]["completed"] === false)    {
            $("#table2").append(tr+td+td2+td3);
        }
        
    }
    $("#table2").append("</tbody>");
    
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
    
    makeSecondRequest();
   makeRequest();
   
    
}

function getKnot(){
    console.log("User have clicked a knot and is redirected to a new page for that specific knot, there the user can register"
    + " the knot a done and register 1 or 2 witnesses");
}

function loadInfo(){
    
}

function makeSecondOrder(id){
    
    var accessToken = getCookie("Russesamfunnet-token");
    var type = "russesamfunnet";
    var url = "http://158.38.101.146:8080/registerCompletedKnot?accessToken="+accessToken+"&type="+type+"&knotId="+id+"&witness1="+1+"&witness2="+2;
      
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
   
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
          
          makeTable(httpRequest.responseText);
          
      } else {
        alert('There was a problem with the request.');
      }
    }
   
    httpRequest.open('GET', url);
    httpRequest.send();
    location.reload();
    
}

function makeOrder(id){
    
    
    
}
            
