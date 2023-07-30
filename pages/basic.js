// Define your image array for each project
const projectImages = [
    ["project1_image1.jpg", "project1_image2.jpg", "project1_image3.jpg"],
    ["project2_image1.jpg", "project2_image2.jpg", "project2_image3.jpg"],
    ["project3_image1.jpg", "project3_image2.jpg", "project3_image3.jpg"],
];

let currentProjectIndex = 0;
let currentImageIndex = 0;

// Function to update the slideshow image
function updateSlideShow() {
    const slideImage = document.getElementById("slide");
    const projectImagesArray = projectImages[currentProjectIndex];

    if (projectImagesArray && projectImagesArray.length > 0) {
        slideImage.src = projectImagesArray[currentImageIndex];
    } else {
        slideImage.src = "";
    }
}

// Function to handle project selection
function selectProject(projectIndex) {
    currentProjectIndex = projectIndex;
    currentImageIndex = 0;
    updateSlideShow();
}

// Function to move to the next image in the slideshow
function nextImage() {
    const projectImagesArray = projectImages[currentProjectIndex];
    if (projectImagesArray && currentImageIndex < projectImagesArray.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    updateSlideShow();
}

// Function to move to the previous image in the slideshow
function prevImage() {
    const projectImagesArray = projectImages[currentProjectIndex];
    if (projectImagesArray && currentImageIndex > 0) {
        currentImageIndex--;
    } else if (projectImagesArray && currentImageIndex === 0) {
        currentImageIndex = projectImagesArray.length - 1;
    }
    updateSlideShow();
}

// Initialize the slideshow with the first project
selectProject(0);
