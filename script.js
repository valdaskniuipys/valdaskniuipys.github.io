// embed link https://www.youtube.com/embed/A_2ySs074DE
// regular https://www.youtube.com/watch?v=A_2ySs074DE&t=5826s
// mobile https://youtu.be/A_2ySs074DE

function result() {
   var linkValue = document.getElementById("txtInput").value;
   var videoCode = "";
   
   if (linkValue !== null) {
       console.log("The link: " + linkValue);
     //   this is used for links from mobile youtube links
       if(linkValue.includes('youtu.be')) {
        videoCode += linkValue.split('/')[3];
       } 
     //   this is used for links from web youtube links
       else {
        videoCode += linkValue.slice(linkValue.indexOf('=') + 1);
       }
      }
   else {
      console.log("Please enter the Youtube link");
   }
  
  var createdLink = "https://www.youtube.com/embed/" + videoCode;

  document.getElementById("youtube-window").src=createdLink;
}

