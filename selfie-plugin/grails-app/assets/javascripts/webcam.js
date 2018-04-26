     //--------------------
      // GET USER MEDIA CODE
      //--------------------
          navigator.getUserMedia = ( navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia ||
                             navigator.msGetUserMedia);

      var video;
      var webcamStream;

      function startWebcam() {
        if (navigator.getUserMedia) {
           navigator.getUserMedia (

              // constraints
              {
                 video: true,
                 audio: false
              },

              // successCallback
              function(localMediaStream) {
                  video = document.querySelector('video');
                 video.src = window.URL.createObjectURL(localMediaStream);
                 webcamStream = localMediaStream;
                 $("#snapshot").show();
                 $("#myCanvas").hide();
//                 setTimeout(function() {
//                 	snapshot();
//                 	 video.src="";
//                 	document.getElementById("video").removeAttribute("controls")   ;
//                 
//             }, 3000);
              },

              // errorCallback
              function(err) {
                 console.log("The following error occured: " + err);
              }
           );
        } else {
           console.log("getUserMedia not supported");
        }  
      }

       function stopWebcam() {
    
     
  }
      //---------------------
      // TAKE A SNAPSHOT CODE
      //---------------------
      var canvas, ctx,imgData;

      function init() {
        // Get the canvas and obtain a context for
        // drawing in it
       $("#snapshot").hide();
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext('2d');
        // imgData = ctx.getImageData(10, 10, 50, 50);
      }

      function snapshot() {
    	  //starts the web cam
    	//  $("#myCanvas").show();
         // Draws current image from the video element into the canvas
       //  var dataURL =canvas.toDataURL("image/png");

       ctx.drawImage(video, 0,0, canvas.width, canvas.height);
       
       //stops the webcam
 
        var img = document.createElement("img");
        img.src = canvas.toDataURL();
        var base64ImageContent = img.src.replace(/^data:image\/(png|jpg);base64,/, "");
        var blob = base64ToBlob(base64ImageContent, 'image/png');                
        var formData = new FormData();
        formData.append('featuredImageFile', blob);
        formData.append('loginId', 14);
        formData.append('version', 123);
          
          var URL = "";
        
          if($("#hiddenType").val()==="photo")
          {
           URL   = "http://localhost:8080/pointOfInterest/uploadPhoto";
          }else
          {
               URL   = "http://localhost:8080/pointOfInterest/uploadAdhar";
          }
        $.ajax({
            type: "POST",
            url: URL,
            data: formData,
            processData: false, //prevent jQuery from automatically transforming the data into a query string
           	 contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {

                $("#result").text(data);
                alert($("#hiddenType").val()+" uploaded successfully");
                stopWebcam();
                console.log("SUCCESS : ", data);
                $("#btnSubmit").prop("disabled", false);

            },
            error: function (e) {

                $("#result").text(e.responseText);
                console.log("ERROR : ", e);
                $("#btnSubmit").prop("disabled", false);

            }
        });
        alert($("#hiddenType").val()+" uploaded successfully");
         video.src="";
                 	document.getElementById("video").removeAttribute("controls")   ;
                        $("#snapshot").hide();
                        lightbox_close();
                        $("#myCanvas").hide();
      }
      function base64ToBlob(base64, mime) 
      {
          mime = mime || '';
          var sliceSize = 1024;
          var byteChars = window.atob(base64);
          var byteArrays = [];

          for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
              var slice = byteChars.slice(offset, offset + sliceSize);

              var byteNumbers = new Array(slice.length);
              for (var i = 0; i < slice.length; i++) {
                  byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);

              byteArrays.push(byteArray);
          }

          return new Blob(byteArrays, {type: mime});
      }