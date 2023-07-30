/// Scrip for SlideShow ... By Me!!! =)

// Define the images for each project
const projectImages = [
    // Project 0 (Game Design)
    [
      "GameD/gallery-img-30.jpg",
      "GameD/gallery-img-31.jpg",
      "GameD/gallery-img-32.jpg",
      "GameD/gallery-img-33.jpg",
      "GameD/gallery-img-34.jpg",
    ],
    // Project 1 (Level Design)
    [
      "LevelD/gallery-img-03.jpg",
      "LevelD/gallery-img-09.jpg",
      "LevelD/gallery-img-12.jpg",
      "LevelD/gallery-img-20.jpg",
      "LevelD/gallery-img-50.jpg",
    ],
    // Project 2 (Programming)
    [
      "DevsCode/gallery-img-42.jpg",
      "DevsCode/gallery-img-72.jpg",
      "DevsCode/gallery-img-74.jpg",
      "DevsCode/gallery-img-77.jpg",
      "DevsCode/gallery-img-83.jpg",
    ],
  ];
  
  // Initialize the current project and image indices
  let currentProjectIndex = 0;
  let currentImageIndex = 0;
  
  // Function to show the current slide
  function showSlide(projectIndex, imageIndex) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
      slide.style.display = i === imageIndex ? 'block' : 'none';
    });
  }
  
  // Function to handle project selector click
  function handleProjectSelectorClick(event) {
    const clickedItem = event.target;
    const newProjectIndex = parseInt(clickedItem.dataset.index);
  
    if (currentProjectIndex !== newProjectIndex) {
      currentProjectIndex = newProjectIndex;
      currentImageIndex = 0; // Reset image index when changing projects
      showSlide(currentProjectIndex, currentImageIndex);
    }
  }
  
  // Function to show the previous slide
  function showPrevSlide() {
    currentImageIndex = (currentImageIndex - 1 + projectImages[currentProjectIndex].length) % projectImages[currentProjectIndex].length;
    showSlide(currentProjectIndex, currentImageIndex);
  }
  
  // Function to show the next slide
  function showNextSlide() {
    currentImageIndex = (currentImageIndex + 1) % projectImages[currentProjectIndex].length;
    showSlide(currentProjectIndex, currentImageIndex);
  }
  
  // Add click event listeners to project selector
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(item => {
    item.addEventListener('click', handleProjectSelectorClick);
  });
  
  // Add click event listeners to navigation buttons
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  prevButton.addEventListener('click', showPrevSlide);
  nextButton.addEventListener('click', showNextSlide);
  
  // Show the first slide initially
  showSlide(currentProjectIndex, currentImageIndex);
  

// document.addEventListener('DOMContentLoaded', function () {
//     const projectItems = document.querySelectorAll('.project-item');
//     const slides = document.querySelectorAll('.slide');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');
  
//     let currentIndex = 0;
//     let currentImageIndex = 0;
//     let currentProjectIndex = 0;



//     function showBizz(projectIndex, imageIndex) {
//         const slides = document.querySelectorAll('.slide');
//         slides.forEach((slide, i ) => {
//             slide.style.display = i === imageIndex ? 'block' : 'none';
//         });
//     }



// /// Function slideShow slide.length  loop
//     // var slideIndex =  [1,1];
//     // var slideId = ["mySlide1", "mySlide2", "mySlide3"];
//     // showDivs(1, 0);

//   function plusDivs(n, no) {
//       showDivs(slideIndex[no] += n, no); 
//   }

//   function showDivs(n, no) {
//       var i;
//       var x = document.getElementsByClassName(slideId[no]);
//       if ( n > x.length) { slideIndex[no] = 1}
//       if (n < 1) { slideIndex[no] = x.length}
//       for (i = 0; i < x.length; i++) {
//           x[i].style.display = "none";   
//       }
//       x[slideIndex[no]-1].style.display = "block";
//   }


// /// function Show Slide   EACH

//     // Function to show the         current slide
//     function showSlide(index) {
//       slides.forEach((slide, i) => {
//         slide.classList.toggle('slide-active', i === index);
//       });
//     }
    
// /// Handle ... PROJECT

//     // Function to handle          project item click
//     function handleProjectItemClick(event) {
//       const clickedItem = event.target;
//       const newIndex = parseInt(clickedItem.dataset.index);
  
//       if (currentIndex !== newIndex) {
//         currentIndex = newIndex;
//         // showDivs(1, slideIndex);
//         showSlide(currentIndex);
//       }
//     }

// /// PREV <> NEXT 

//   function showPrevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   }

//   function showNextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }
    
// /// click projectItems

//     // Add click event listeners to project items
//     projectItems.forEach(item => {
//       item.addEventListener('click', handleProjectItemClick);
//     });
  
//     // Add click event listeners to all images within the slideshow
//     const slideshowImages = document.querySelectorAll('.slide img');
//     slideshowImages.forEach(image => {
//       image.addEventListener('click', handleImageClick);
//     });

//     prevButton.addEventListener('click', showPrevSlide);
//     nextButton.addEventListener('click', showNextSlide);
//     showSlide(currentIndex);

//   });
  



  
  
  
  
  
















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
  