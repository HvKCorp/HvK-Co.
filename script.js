var video = document.getElementById('video-player');
var videoContainer = document.getElementById('video-container');
var siteContent = document.getElementById('site-content');
var profilePic = document.querySelector('.profile-pic');

video.addEventListener('canplay', function() {
  if (typeof video.play === 'function') {
    video.controls = false; // Hide video controls
    video.play().then(function() {
      // Autoplay started successfully
      setTimeout(function() {
        videoContainer.style.opacity = 0;
        setTimeout(function() {
          videoContainer.style.display = 'none';
          siteContent.style.visibility = 'visible';
          siteContent.style.opacity = 1;
          animateLinks();
          animateProfilePic();
        }, 1000);
      }, (video.duration * 1000) - 1000);
    }).catch(function() {
      // Autoplay permission denied
      video.controls = true; // Show video controls
      videoContainer.style.opacity = 0;
      setTimeout(function() {
        videoContainer.style.display = 'none';
        siteContent.style.visibility = 'visible';
        siteContent.style.opacity = 1;
        animateLinks();
        animateProfilePic();
      }, 1000);
    });
  }
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

function animateProfilePic() {
  profilePic.classList.add('animated-profile');
}
