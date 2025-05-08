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


var swiper = new Swiper(".location-swiper", {
  spaceBetween: 32,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    }
  },
  loop: true,
  navigation: {
    nextEl: ".location-swiper-button-next",
    prevEl: ".location-swiper-button-prev",
  },
});


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


document.addEventListener('DOMContentLoaded', function () {
  // For every nested tab group
  document.querySelectorAll('ul.nav-tabs[id^="nestedTab"]').forEach(function(tabList) {
    const tabLinks = tabList.querySelectorAll('.nav-link');
    const prevBtn = tabList.querySelector('.tab-arrow-prev');
    const nextBtn = tabList.querySelector('.tab-arrow-next');

    function getActiveTabIdx() {
      return Array.from(tabLinks).findIndex(tab => tab.classList.contains('active'));
    }

    function activateTab(idx) {
      if (idx < 0 || idx >= tabLinks.length) return;
      tabLinks[idx].click();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        const idx = getActiveTabIdx();
        if (idx > 0) activateTab(idx - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        const idx = getActiveTabIdx();
        if (idx < tabLinks.length - 1) activateTab(idx + 1);
      });
    }
  });
});

  // Initialize Interiors Swiper
  var interiorsSwiper = new Swiper(".interiors-swiper", {
    effect: "cards",
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    // loop: true,
    navigation: {
      nextEl: ".interiors-swiper-button-next",
      prevEl: ".interiors-swiper-button-prev",
    },
    // pagination: {
    //   el: ".interiors-swiper-pagination",
    //   clickable: true,
    // },
    cardsEffect: {
      perSlideOffset: 8,
      perSlideRotate: 2,
      rotate: true,
      slideShadows: true,
    },
  });

  // Initialize Interiors Swiper
  var interiorsSwiper = new Swiper(".interiors2-swiper", {
    effect: "cards",
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    // loop: true,
    navigation: {
      nextEl: ".interiors2-swiper-button-next",
      prevEl: ".interiors2-swiper-button-prev",
    },
    // pagination: {
    //   el: ".interiors-swiper-pagination",
    //   clickable: true,
    // },
    cardsEffect: {
      perSlideOffset: 8,
      perSlideRotate: 2,
      rotate: true,
      slideShadows: true,
    },
  });

// Smooth scrolling and active section highlighting
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.navigated-sections__nav-button');
    const sections = document.querySelectorAll('.navigated-sections__section');
    
    // Function to handle smooth scrolling
    function scrollToSection(targetId) {
        const targetSection = document.querySelector(`.navigated-sections__section--${targetId}`);
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Add click event listeners to nav buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            scrollToSection(targetId);
        });
    });

    // Function to update active button based on scroll position
    function updateActiveButton() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for better trigger point
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.classList[1].split('--')[1]; // Get section ID from class

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all buttons
                navButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to corresponding button
                const activeButton = document.querySelector(`.navigated-sections__nav-button[data-target="${sectionId}"]`);
                if (activeButton) {
                    activeButton.classList.add('active');
                }
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateActiveButton);
    
    // Initial check for active section
    updateActiveButton();
});

document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.querySelector('.back-to-top');
    
    // Function to handle scroll behavior
    function handleScroll() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    }

    // Add click event to scroll to top
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
});

// Add scroll event listener for main navbar active state
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);
    // Initial check
    handleNavbarScroll();
});

var swiper = new Swiper(".hero-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: { 
    nextEl: ".hero-swiper-button-next",
    prevEl: ".hero-swiper-button-prev",
  },
});

// Hero section next/prev button functionality
document.addEventListener('DOMContentLoaded', function() {
    const heroNextBtn = document.querySelector('.hero-swiper-button-next');
    const heroPrevBtn = document.querySelector('.hero-swiper-button-prev');
    const heroSwiper = document.querySelector('.hero-swiper');
    const slides = heroSwiper.querySelectorAll('.swiper-slide');
    let currentSlide = 0;

    // Initialize Swiper
    const heroSwiperInstance = new Swiper(".hero-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: { 
            nextEl: ".hero-swiper-button-next",
            prevEl: ".hero-swiper-button-prev",
        },
        on: {
            init: function() {
                updateButtonBackgrounds();
            },
            slideChange: function() {
                currentSlide = this.realIndex;
                updateButtonBackgrounds();
            }
        }
    });

    function updateButtonBackgrounds() {
        // Update next button background
        const nextSlideIndex = (currentSlide + 1) % slides.length;
        const nextSlideImg = slides[nextSlideIndex].querySelector('img').src;
        heroNextBtn.querySelector('img').src = nextSlideImg;

        // Update prev button background
        const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
        const prevSlideImg = slides[prevSlideIndex].querySelector('img').src;
        heroPrevBtn.querySelector('img').src = prevSlideImg;
    }

    // Hover effects for next button
    heroNextBtn.addEventListener('mouseenter', function() {
        const nextSlideIndex = (currentSlide + 1) % slides.length;
        const nextSlideImg = slides[nextSlideIndex].querySelector('img').src;
        this.querySelector('img').src = nextSlideImg;
    });

    // Hover effects for prev button
    heroPrevBtn.addEventListener('mouseenter', function() {
        const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
        const prevSlideImg = slides[prevSlideIndex].querySelector('img').src;
        this.querySelector('img').src = prevSlideImg;
    });
});


