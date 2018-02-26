
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="JavaScript/mainScript.js"></script>

<!--<div class="menu">
    <ul>
        <a href="feed.php"><li>Feed</li></a>
        <a href="knots.php"><li>Knuter</li></a>
        <a href="scoreboard.php"><li>Scoreboard</li></a>
        <a href="userprofile.php"><li>Brukerprofil</li></a>
        <a onclick="logoutUser()"><li>Logout</li></a>
    </ul>

</div>-->
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="feed.php">Feed</a></li>
        <li><a href="knots.php">Knuter</a></li>
        <li><a href="scoreboard.php">Scoreboard</a></li> 
        <li><a href="userprofile.php">Brukerprofil</a></li> 
      </ul>
      <ul class="nav navbar-nav navbar-right">
        
        <li><a onclick="logoutUser()"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
      </ul>
    </div>
  </div>
</nav>