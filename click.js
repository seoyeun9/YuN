const video = document.querySelector('.clickable-video');

if (video) {
    video.style.cursor = 'pointer';
    
    video.addEventListener('click', function() {
      
        video.muted = !video.muted;
    });
}
