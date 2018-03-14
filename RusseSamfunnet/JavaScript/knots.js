/*   JAVASCRIPT CODE SPECIFIC TO THE KNOTS.PHP WEB PAGE    */

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
    
   
    
}

function getKnot(){
    console.log("User have clicked a knot and is redirected to a new page for that specific knot, there the user can register"
    + " the knot a done and register 1 or 2 witnesses");
}

function loadInfo(){
    
}

function addRow()
            {
                
                // get input values
                var fname = document.getElementById('fname').value;
                 var lname = document.getElementById('lname').value;
                  var age = document.getElementById('age').value;
                  
                  // get the html table
                  // 0 = the first table
                  var table = document.getElementsByTagName('table')[0];
                  
                  // add new empty row to the table
                  // 0 = in the top 
                  // table.rows.length = the end
                  // table.rows.length/2+1 = the center
                  var newRow = table.insertRow(table.rows.length/2+1);
                  
                  // add cells to the row
                  var cel1 = newRow.insertCell(0);
                  var cel2 = newRow.insertCell(1);
                  var cel3 = newRow.insertCell(2);
                  
                  // add values to the cells
                  cel1.innerHTML = fname;
                  cel2.innerHTML = lname;
                  cel3.innerHTML = age;
            }
            
