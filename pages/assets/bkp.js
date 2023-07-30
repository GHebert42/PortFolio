/// Scrip for SlideShow ... By Me!!! =)

// V0 -- origin Version of script, used to test prefered version ---


document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('.project-item');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    let currentIndex = 0;

    var slideIndex =  [1,1];
    var slideId = ["mySlide1", "mySlide2", "mySlide3"];
    showDivs(1, 0);
    // showDivs(1, 1);
    // showDivs(1, 2);


    
  /// Show pic

    function plusDivs(projId, imgId) {
        showDivs(slideIndex[imgId] += projId, imgId); 
    }

    function showDivs(projId, imgId) {
        var i;
        var x = document.getElementsByClassName(slideId[imgId]);
        if ( projId > x.length) { slideIndex[imgId] = 1}
        if (projId < 1) { slideIndex[imgId] = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";   
        }
        alert('nb : ' + i + ' items!' + projId + 'folder!!');
        x[slideIndex[imgId]-1].style.display = "block";
    }


  /// Show Slide  
      // Function to show the current slide
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.toggle('slide-active', i === index);
        });
      }

  /// Handle ... IMAGES


    
  /// Handle ... PROJECT
    // Function to handle project item click
      function handleProjectItemClick(event) {
        const clickedItem = event.target;
        const newIndex = parseInt(clickedItem.dataset.index);
    
        if (currentIndex !== newIndex) {
          currentIndex = newIndex;
          // showDivs(1, slideIndex);
          showSlide(currentIndex);
        }
      }

    
  /// PREV <> NEXT 
  
    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }


  /// click proj-item

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
    // showDivs(1, slideIndex);

  });
  



  
  
  
  
  












/// --- dont know yet what this should be ...! 


// document.addEventListener('DOMContentLoaded', function () {
//     const projectItems = document.querySelectorAll('.project-item');
//     const slides = document.querySelectorAll('.slide');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');
  
//     let currentIndex = 0;
  
// // Function to show the current slide
//     function showSlide(index) {
//       slides.forEach((slide, i) => {
//         slide.style.display = i === index ? 'block' : 'none';
//       });
//     }
  
// // Function to handle project item click
//     function handleProjectItemClick(event) {
//       const clickedItem = event.target;
//       const newIndex = parseInt(clickedItem.dataset.index);
  
//       if (currentIndex !== newIndex) {
//         currentIndex = newIndex;
//         showSlide(currentIndex);
//       }
//     }
  
// // Function to show the previous slide
//     function showPrevSlide() {
//       currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//       showSlide(currentIndex);
//     }
  
// // Function to show the next slide
//     function showNextSlide() {
//       currentIndex = (currentIndex + 1) % slides.length;
//       showSlide(currentIndex);
//     }
  
// // Add click event listeners to project items
//     projectItems.forEach(item => {
//       item.addEventListener('click', handleProjectItemClick);
//     });
  
// // Add click event listeners to navigation buttons
//     prevButton.addEventListener('click', showPrevSlide);
//     nextButton.addEventListener('click', showNextSlide);
  
// // Show the first slide initially
//     showSlide(currentIndex);
//   });
  