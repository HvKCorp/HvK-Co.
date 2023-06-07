// Preload profile picture and favicon
var profilePic = document.getElementById('profile-image');
var favicon = document.querySelector("link[rel='shortcut icon']");

var image = new Image();
image.src = profilePic.src;
image.onload = function() {
  profilePic.classList.add('animated-profile');
};

var faviconImage = new Image();
faviconImage.src = favicon.href;

// Rest of your JS code
var video = document.getElementById('video-player');
var videoContainer = document.getElementById('video-container');
var siteContent = document.getElementById('site-content');

video.addEventListener('ended', function() {
  videoContainer.style.opacity = 0;
  setTimeout(function() {
    videoContainer.style.display = 'none';
    siteContent.style.visibility = 'visible';
    siteContent.style.opacity = 1;
    animateLinks();
  }, 1000);
});

function animateLinks() {
  var links = document.getElementsByClassName('animated-link');
  for (var i = 0; i < links.length; i++) {
    (function(link, index) {
      setTimeout(function() {
        link.classList.add('animated-link');
      }, index * 200);
    })(links[i], i);
  }
}
