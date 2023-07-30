// Define your image array for each project
const projectImages = [
    ["DevsCode/gallery-img-42.jpg", "DevsCode/gallery-img-72.jpg", "DevsCode/gallery-img-74.jpg"],
    ["project2_image1.jpg", "project2_image2.jpg", "project2_image3.jpg"],
    ["project3_image1.jpg", "project3_image2.jpg", "project3_image3.jpg"],
];

// DevsCode/gallery-img-42.jpg
// DevsCode/gallery-img-72.jpg
// DevsCode/gallery-img-74.jpg
// DevsCode/gallery-img-77.jpg
// DevsCode/gallery-img-83.jpg

// LevelD/gallery-img-03.jpg
// LevelD/gallery-img-09.jpg
// LevelD/gallery-img-12.jpg
// LevelD/gallery-img-20.jpg
// LevelD/gallery-img-50.jpg

// GameD/gallery-img-30.jpg
// GameD/gallery-img-31.jpg
// GameD/gallery-img-32.jpg
// GameD/gallery-img-33.jpg
// GameD/gallery-img-34.jpg

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
