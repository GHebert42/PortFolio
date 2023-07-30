// V3 - un_alter version of script.js ---


document.addEventListener('DOMContentLoaded', function () {
  const projectItems = document.querySelectorAll('.project-item');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;

  // Function to show the current slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('slide-active', i === index);
    });
  }

  // Function to handle image click
  function handleImageClick(event) {
  const clickedImage = event.target;
  clickedImage.style.width = '200%';
  }
  
  // Function to handle project item click
  function handleProjectItemClick(event) {
    const clickedItem = event.target;
    const newIndex = parseInt(clickedItem.dataset.index);

    if (currentIndex !== newIndex) {
      currentIndex = newIndex;
      showSlide(currentIndex);
    }
  }

  // Function to show the previous slide
  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Function to show the next slide
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Add click event listeners to project items
  projectItems.forEach(item => {
    item.addEventListener('click', handleProjectItemClick);
  });

  // Add click event listeners to all images within the slideshow
  const slideshowImages = document.querySelectorAll('.slide img');
  slideshowImages.forEach(image => {
  image.addEventListener('click', handleImageClick);
  });

  // Add click event listeners to navigation buttons
  prevButton.addEventListener('click', showPrevSlide);
  nextButton.addEventListener('click', showNextSlide);

  // Show the first slide of each project initially
  showSlide(currentIndex);
});