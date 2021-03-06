<html>
    <head>
        <meta charset="UTF-8">
        <title>Russesamfunnet</title>
        <link rel="stylesheet" type="text/css" href="CSS/normalize.css">
        <link rel="stylesheet" type="text/css" href="CSS/admin.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <!--
        <meta name="google-signin-client_id" content="906320627350-4b7lhkufslsljv9et2soi2i49ektmv6k.apps.googleusercontent.com">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    -->
        <script src="JavaScript/adminScript.js"></script>
        <!--<script src="JavaScript/admin.js"></script>--> 


        <script>
        /*
            function getInfoForPage(){
                console.log("is this code executed?");
                // fetch data from the rest api and add the data to the page.
            }
            */
        </script>
        <link rel="stylesheet" type="text/css" href="CSS/custombootstrap.css">
    </head>
    <body>
        <div id="wrap">
        <div class="col-12 col-m-12">
                <?php include 'Templates/navigation.php';?>
            </div>
            <div>
                <div id="main" >
                    <!--<div class="container clear-top">
                        <div class="row">
                            <div class="col-2 col-m-2 menu-style">
                                <?php include 'Templates/navigation.php';?>
                            </div>
                        </div>
                    </div>-->
                    <div class="container">
                        <div class="admin-menu">
                            <div class ="row">
                                <div class="col-sm-3 setHeight menuStyleExtra">
                                    <a id="framsideLink" href="admin.php" >
                                        <div class="buttonDiv menuLink">
                                            <p>FRAMSIDE</p>
                                        </div>
                                    </a>
                                    <a id="knuterLink" href="admin.php?mode=knute" >
                                        <div class="buttonDiv" >    
                                            <p>KNUTER</p>
                                        </div>
                                    </a> <!-- onclick="knots();return false;"  -->
                                    <a id="brukereLink" href="admin.php?mode=brukere" >
                                        <div class="buttonDiv" >
                                            <p>BRUKERE</p>
                                        </div>      
                                    </a>
                                    <!--<a id="bekreftBrukerLink" href="admin.php?mode=bekreftBruker" >
                                        <div class="buttonDiv" >
                                            <p>BEKREFT BRUKER</p>
                                        </div>      
                                    </a>-->
                                    <a id="meldingerLink" href="admin.php?mode=meldinger" >
                                        <div class="buttonDiv" >
                                            <p>MELDINGER</p>
                                        </div>
                                    </a>
                                    <!--<a id="registrerAdminLink" href="admin.php?mode=registrerAdmin" >
                                        <div class="buttonDiv" >    
                                            <p>REGISTRER ADMIN</p>
                                        </div>
                                    </a>-->
                                    <a id="rapporterLink" href="admin.php?mode=rapporterFeil" >
                                        <div class="buttonDiv" >    
                                            <p>RAPPORTER PROBLEM</p>
                                        </div>
                                    </a>
                                    <a id="kontaktOssLink" href="admin.php?mode=kontaktOss" >
                                        <div class="buttonDiv" >    
                                            <p>KONTAKT OSS</p>
                                        </div>
                                    </a>
                                    <a id="hjelpLink" href="admin.php?mode=hjelp" >
                                        <div class="buttonDiv" >    
                                            <p>HJELP</p>
                                        </div>
                                    </a>
                                </div>
                                <div id="landingDiv">
                                    <div class="col-sm-9 setHeight">
                                        <div id="landingLogo">
                                            <img src="logos/logo.png" />  
                                        </div>
                                        <div id="framsideTekst">
                                            <p>Velkommen til adminsiden</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div id="knuteDiv">
                                    <div id="" class="col-sm-4 setHeight">
                                        <div id="knuter" style="overflow-y: scroll;">
                                        </div>
                                        <div id="nyKnute">
                                            <div style="width: 10%; margin: auto;">
                                                <a href="#" action="admin.php?mode=knute" onclick="nyKnute();return false;">
                                                    <img src="images/plus.png" style="height: 85%; padding-top: 6px;"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="knuteInfoTom">
                                        <div class="col-sm-5 setHeight">
                                            
                                        </div>
                                    </div>
                                    <div id="knuteInfo">
                                        <div class="col-sm-5 setHeight">
                                            <!--<p>COLUMN 3 - VIS KNUTE INFO</p>-->
                                            <div id="deleteKnot" style="overflow: none;">
                                                <div style="width: 100%; margin: auto;">
                                                    <a id="deleteKnotButton" href="#" action="admin.php?mode=knute">
                                                        <div style="width: 75%; float: right;">
                                                            <div style="float: left; font-size: 150%; margin: 15px 25px 10px 0;">Slett knute </div><img src="images/cancel.png" style="height: 85%; padding-top: 6px;"/>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="showKnotInfo">
                                                showInfo
                                            </div>
                                            
                                            <div id="knotButtons">
                                                <div style="width: 50%; margin: auto;">
                                                    <a href="#" action="admin.php?mode=knute" onclick="commitChanges(); return false;"style="width: 61px; float: left;">
                                                        <img src="images/confirm2.png" style="height: 85%; padding-top: 11px;"/>
                                                    </a>
                                                    <a href="#" action="admin.php?mode=knute" onclick="cancel(); return false;" style="width: 60px; float: right;">
                                                        <img src="images/cancel.png" style="height: 85%; padding-top: 11px;"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="nyKnuteInput">
                                        <div class="col-sm-5 setHeight">
                                            <div id="addKnotHeading">
                                                    <p>Opprett en ny knute</p>
                                            </div>

                                            <div id="showNewKnotInfo">
                                                <br>
                                                <form name="nyRusseKnute" onSubmit="registrerKnute(); return false;">
                                                    Navn på knuten: <br>
                                                    <input type="text" id="knuteNavn" name="knuteNavn"/><br><br>
                                                    Beskrivelse av knuten:<br>
                                                    <!--<input type="text" id="knuteBeskrivelse" navn="knuteBeskrivelse"/><br><br>-->
                                                    <textarea id="knuteBeskrivelse"></textarea>
                                                    <!--<input type="submit" name="Submit" value="Register ny knute"/>-->
                                                </form>
                                            </div>
                                            
                                            <div id="newKnotButtons">
                                                <div style="width: 50%; margin: auto; background: black;">
                                                    <a href="#" action="admin.php?mode=knute" onclick="registrerKnute(); return false;" style="width: 61px; float: left;">
                                                        <img src="images/confirm2.png" style="height: 85%; padding-top: 11px;"/>
                                                    </a>
                                                    <a href="#" action="admin.php?mode=knute" onclick="cancelNyKnute(); return false;" style="width: 60px; float: right;">
                                                        <img src="images/cancel.png"  style="height: 85%; padding-top: 11px;"/>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div id="brukerDiv">
                                    <div class="col-sm-9 setHeight">
                                        <div id="brukerSearch">
                                            <form id="brukerSearchForm">
                                                <input type="search" id="brukerSearchFormInput" oninput="searchInput()"/>
                                            </form>  
                                        </div>
                                        <div id="tableContainer">
                                            <table id="brukerTable">
                                                <thead class="fixedHeader">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>FORNAVN</th>
                                                        <th>ETTERNAVN</th>
                                                        <th>E-POST</th>
                                                        <th>ROLLE</th>
                                                        <th>STATUS</th>
                                                        <th>HANDLING</th>
                                                    </tr>
                                                </thead>
                                                
                                                <tbody id="brukerTableBody">
                                                </tbody>
                                            </table>
                                        </div>
                                        <div id="brukerIkonForklaring">
                                            <img src="images/confirm2.png"  style="height: 20px; padding-top: 0;"/> Bekreft bruker 
                                            <img src="images/cancel.png"  style="height: 20px; padding-top: 0;"/> Ubekreft bruker 
                                            <img src="images/uparrow.png"  style="height: 20px; padding-top: 0;"/> Gi adminrettingheter 
                                            <img src="images/downarrow.png"  style="height: 20px; padding-top: 0;"/> Fjern adminrettigheter 
                                        </div> 
                                    </div>
                                    
                                </div>
                                <div id="bekreftBrukerDiv">
                                    <div class="col-sm-9 setHeight">
                                        <div id="bekreftBrukerSearch">
                                            <form id="bekreftBrukerSearchForm">
                                                <input type="search" id="bekreftBrukerSearchFormInput" oninput="searchInputConfirm()"/>
                                            </form>  
                                        </div>
                                        <table id="bekreftBrukerTable">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Fornavn</th>
                                                    <th>Etternavn</th>
                                                    <th>E-post</th>
                                                    <!--<th>Skole</th>-->
                                                    <th>Rolle</th>
                                                    <th>Status</th>
                                                    <th>Endre Status</th>
                                                </tr>
                                            </thead>
                                            <tbody id="bekreftBrukerTableBody">
                                                <!--<tr>
                                                    <td>Kristian</td>
                                                    <td>Flisnes Hustad</td>
                                                    <td>krihus05@gmail.com</td>
                                                    <td>NTNU Ålesund</td>
                                                </tr>-->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="meldingerDiv">
                                    <div class="col-sm-9 setHeight">
                                        <div id="feedSearch">
                                            <form id="feedSearchForm">
                                                <input type="search" id="feedSearchFormInput"/>
                                            </form>  
                                        </div>
                                        <div id="feedTableContainer">
                                            <table id="feedTable">
                                                <thead class="fixedHeader">
                                                    <tr>
                                                        <th style="width: 5%;">ID</th>
                                                        <th style="width: 30%;">RUSS</th>
                                                        <th style="width: 60%;">MELDING</th>
                                                        <th style="width: 5%;">SLETT</th>
                                                    </tr>
                                                </thead>
                                                
                                                <tbody id="feedTableBody">
                                                </tbody>
                                            </table>
                                        </div>
                                        <div id="feedIkonForklaring">
                                            <img src="images/cancel.png"  style="height: 20px; padding-top: 0;"/> Slett melding
                                        </div> 
                                    </div>
                                </div>
                                <div id="registrerAdminDiv">
                                    <div class="col-sm-9 setHeight">
                                        registrerAdminDiv   
                                    </div>
                                </div>
                                <div id="rapporterDiv">
                                    <div class="col-sm-9 setHeight">
                                        <div>
                                            <div id="statusField">

                                            </div>
                                            <div id="errorReportForm">
                                                <form name="errorReportForm" onSubmit="errorReport(); return false;">
                                                    Subject: <br>
                                                    <input type="text" id="errorSubject" name="errorReportSubject"/><br><br>
                                                    Melding:<br>
                                                    <!--<input type="text" id="knuteBeskrivelse" navn="knuteBeskrivelse"/><br><br>-->
                                                    <textarea id="errorMessage"></textarea><br>
                                                    <input type="submit" id="errorReportSubmit" name="Submit" value="Send problemmelding"/>
                                                </form> 
                                            </div>
                                        
                                        </div>
                                          
                                    </div>
                                </div>
                                <div id="kontaktOssDiv">
                                    <div class="col-sm-9 setHeight">
                                        <div style="display: inline-block; margin: auto; width: 100%;">
                                            <p style="margin: auto; margin: 25px 0 0 15px;">
                                                Kontakt oss på e-post: Russesamfunnet@gmail.com
                                            </p>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="blurEffect">
                <div class="footer">
                    <div>
                
                    </div>
                </div>
            </div> 
        </div>
    </body>
</html>

     <!--<div class="blurEffect">
        <div class="footer container">
            <div>
                footer
            </div>
        </div>
    </div> -->