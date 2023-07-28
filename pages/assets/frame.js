// First JS script Frame window

function adjustWindowSize() {
    var minWindowHeight = 580;
    var currentHeight = window.innerHeight;

    if (currentHeight < minWindowHeight) {
        window.resizeTo(window.innerWidth, minWindowHeight);
        // alert('Minimum Height Reached : ' + minWindowHeight + ' pixels!');
    }
}

// Call the function when the page loads
adjustWindowSize();

// Call the function when the window is resized
window.addEventListener('resize', function () {
    adjustWindowSize();
});
    // 