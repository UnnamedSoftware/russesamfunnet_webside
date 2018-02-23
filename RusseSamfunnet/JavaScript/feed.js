/*   JAVASCRIPT CODE SPECIFIC TO THE FEED.PHP WEB PAGE    */

function getInfoForPage(){
    console.log("is this code executed? feed.js");
    getUserInfo();
    getFeed();
    getSchools();

    // fetch data from the rest api and add the data to the page.
}

function getUserInfo(){
    console.log("Getting user info and adding it to the page");
}

function getFeed(){
    console.log("Getting the feed for this user and adding it to the page");
}

function handleActions(){
    console.log("handle actions like clicks on a feed item");
}

function postNewMessageToFeed(){
    console.log("post a new message to the feed (separate for area, school and group?)");
}

//Just a test
function getSchools(){
    var url = getURL();
    console.log(url);
    var schoolURL = url + "getAllSchools";
    console.log(schoolURL);
    var client = new HttpClient();
    client.get(schoolURL, function(response) {
        var responseAsJSON = JSON.parse(response);
        var school = responseAsJSON[100];
        var schoolId = school.schoolId;
        var schoolName = school.schoolName;
        var schoolStatus = school.schoolStatus;
        var schoolLocation = school.schoolLocation;
        var schoolMunicipality = school.schoolMunicipality;
        let divToAddTo = document.getElementById("schoolInfo");
        divToAddTo.innerHTML = "<ul>"
                +"<li>"+schoolId+"</li>"
                +"<li>"+schoolName+"</li>"
                +"<li>"+schoolStatus+"</li>"
                +"<li>"+schoolLocation+"</li>"
                +"<li>"+schoolMunicipality+"</li>"
           +"</ul>";


        //console.log(responseAsJSON[1]);
        //for(let i = 0; i < responseAsJSON.length; i++){
        //    console.log(responseAsJSON[i].schoolName);
        //}
        //console.log(response.json());
    });
}
