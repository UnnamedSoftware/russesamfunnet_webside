/*   JAVASCRIPT CODE SPECIFIC TO THE SCOREBOARD.PHP WEB PAGE    */

var httpRequest;

makeRequest();

function makeRequest() {

httpRequest = new XMLHttpRequest();

if (!httpRequest) {
  alert('Giving up :( Cannot create an XMLHTTP instance');
  return false;
}

httpRequest.onreadystatechange = alertContents;
httpRequest.open('GET', 'http://158.38.101.146:8080//scoreboardTop10?theRussId=1');
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
$("#table").append("<tbody>"); 
for(var i=0;i<obj.length;i++)
{
    var tr="<tr>";
    var td2="<td>"+obj[i]["position"]+"</td>";
    var td3="<td>"+obj[i]["russId"]["firstName"] + " " +obj[i]["russId"]["lastName"]+"</td>";
    var td4="<td>"+obj[i]["points"]+"</td>\n\</tr>";

   $("#table").append(tr+td2+td3+td4); 

}
$("#table").append("</tbody>"); 
}

function getInfoForPage(){
    console.log("is this code executed? scoreboard.js");
    getUserInfo();
    getScoreboard();

    // fetch data from the rest api and add the data to the page.
}

function getUserInfo(){
    console.log("Getting user info and adding it to the page");
}

function getScoreboard(){
    console.log("Getting the scoreboard for this user and adding it to the page");
    
    
    
}

