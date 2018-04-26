<!DOCTYPE html>
<html>
       <title>
       Upload Student Details
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <link rel="stylesheet" href="/assets/bootstrap.css?compile=false" />
<link rel="stylesheet" href="/assets/grails.css?compile=false" />
<link rel="stylesheet" href="/assets/main.css?compile=false" />
<link rel="stylesheet" href="/assets/mobile.css?compile=false" />
<link rel="stylesheet" href="/assets/application.css?compile=false" />
<link rel="stylesheet" href="/assets/style.css?compile=false" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!--<script type="text/javascript" src="http://localhost/spring-boot-file-upload-ajax-rest/src/main/resources/static/js/main.js"></script>-->

<body  onload="init();">

    <div class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/#">
                    <i class="fa grails-icon">
                        <img src="/assets/grails-cupsonly-logo-white.svg" />
                    </i> Grails
                </a>
            </div>
            <div class="navbar-collapse collapse" aria-expanded="false" style="height: 0.8px;">
                <ul class="nav navbar-nav navbar-right">
                    
                </ul>
            </div>
        </div>
    </div>
<h1>upload your  photo and adhar ... Note : - Keep your face still and take snapshot for photo and put your adhar in front of camera for adhar.</h1>
      <div>
          <button onclick="lightbox_open('photo');">Take Photo</button> 
          <button onclick="lightbox_open('adhar');">Take Adhar</button> 
          <input type="hidden" id="hiddenType" val=''   />
      </div>
    </p>
    <div id="light">
  <video  width=600 height=400 id="video" controls autoplay></video>
    <button onclick="snapshot();" id="snapshot">Take Snapshot</button> 
     <canvas  id="myCanvas" width="300" height="300" ></canvas> 
  </div>
     
      <br>
          
<a href="#edit-pointOfInterest" class="skip" tabindex="-1">Skip to content&hellip;</a>
<div class="nav" role="navigation">
    <ul>
        <li><a class="home" href="/">Home</a></li>
        <li><a href="/pointOfInterest/index" class="list">PointOfInterest List</a></li>
        <li><a href="/pointOfInterest/create" class="create">New PointOfInterest</a></li>
    </ul>
</div>
<div id="edit-pointOfInterest" class="content scaffold-edit" role="main">
</div>


    <div class="footer" role="contentinfo"></div>

    <div id="spinner" class="spinner" style="display:none;">
        Loading&hellip;
    </div>

    <script type="text/javascript" src="/assets/jquery-2.2.0.min.js?compile=false" ></script>
<script type="text/javascript" src="/assets/bootstrap.js?compile=false" ></script>
<script type="text/javascript" src="/assets/application.js?compile=false" ></script>
<script type="text/javascript" src="/assets/index.js?compile=false" ></script>
<script type="text/javascript" src="/assets/webcam.js?compile=false" ></script>


     
</body>
</html>