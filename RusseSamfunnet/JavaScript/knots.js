/*   JAVASCRIPT CODE SPECIFIC TO THE KNOTS.PHP WEB PAGE    */

  var token = "";
  var type = "";
  
  function initialize() {
    var cookie = getCookie("Russesamfunnet");
    if (cookie === null) {
        facebookInit();
        try {
            logoutNoRedirect();
        } catch (error) {
            console.log("FacebookError: " + error);
        } 
        redirectUser();
        /*USER MUST BE REDIRECTED TO LOGIN AND SESSION WITH
          GOOGLE/FACEBOOK/RUSSESAMFUNNET MUST BE ENDED*/
    }
    else if (cookie !== null) {
        //console.log("HELLO THIS IS THE ONLOAD IN ADMINSCRIPT.JS");
        if (cookie === "facebook") {
            facebookInit();
            type = "facebook";
            
        }
        else if (cookie === "russesamfunnet") {
            //console.log(cookie);
            //console.log(getCookie("Russesamfunnet-token"));
            type = "russesamfunnet";
            token = getCookie("Russesamfunnet-token");
        }
        //getInfoForPage();
    }
    else {
        //console.log("ELSE...HOW?");
    }
}
  
  function makeRequest() {
      
      
      
    var url = "http://158.38.101.146:8080/completedKnots?accessToken="+token+"&type="+type;
      
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
    
    var url = "http://158.38.101.146:8080/getKnotsList?accessToken="+token+"&type="+type;

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
      console.log(obj);
      alert("check console");
      
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
    initialize();
    makeSecondRequest();
    makeRequest();
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

var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}

function facebookInit() {
    //console.log("facebook Init 2");
    FB.init({
        appId: '291199641408779',
        cookie: true,
        xfbml: true,
        version: 'v2.12'
    });
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            console.log(response.status);
            token = response.authResponse.accessToken;
            //console.log(token);
            //printToken();
            //getInfo();
        } else if (response.status === 'not_authorized') {
            console.log(response.status);
        } else {
            console.log(response.status);
        }
    });
}//;