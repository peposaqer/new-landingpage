
const openBtn = document.getElementById('openVideoModal');
const modal = document.getElementById('videoModal');
const closeBtn = document.getElementById('closeVideoModal');
const youtubeFrame = document.getElementById('youtubeFrame');
const youtubeUrl = "https://www.youtube.com/embed/WYn_RA4bgXE?autoplay=1";

openBtn.onclick = function() {
  youtubeFrame.src = youtubeUrl;
  modal.style.display = "flex";
}
closeBtn.onclick = function() {
  modal.style.display = "none";
  youtubeFrame.src = "";
}
// Optional: close modal when clicking outside content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    youtubeFrame.src = "";
  }
}


var swiper = new Swiper(".construction-update-slider .swiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,
  navigation: {
    nextEl: ".construction-update-slider-button-next",
    prevEl: ".construction-update-slider-button-prev",
  },
  pagination: {
    el: ".construction-update-slider-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
  },
  cursor: {
    el: ".construction-update-slider-cursor",
    type: "progress",
  },
});


// Array of texts for each slide (in order)
const slideTexts = [
  "July 2023",
  "August 2023",
  "September 2023"
];

// Set initial text
document.getElementById('swiper-slide-text').textContent = slideTexts[0];

// Assuming your Swiper instance is called 'swiper'
swiper.on('slideChange', function () {
  const idx = swiper.realIndex; // realIndex is the visible slide index
  document.getElementById('swiper-slide-text').textContent = slideTexts[idx];
});