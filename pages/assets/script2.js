document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('.project-item');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('slide-active', i === index);
      });
    }
  
    function handleProjectItemClick(event) {
      const clickedItem = event.target;
      const newIndex = parseInt(clickedItem.dataset.index);
  
      if (currentIndex !== newIndex) {
        currentIndex = newIndex;
        showSlide(currentIndex);
      }
    }
  
    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    projectItems.forEach(item => {
      item.addEventListener('click', handleProjectItemClick);
    });
  
    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);
  
    showSlide(currentIndex);
  });
  