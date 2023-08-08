document.addEventListener('DOMContentLoaded', function () {
    const emailLink = document.getElementById('email-link');

    emailLink.addEventListener('click', function (event) {
        event.preventDefault();
        const email = emailLink.textContent.trim();
        
        copyToClipboard(email);
        alert('Email copied to clipboard: ' + email);
    });

    // Écouteurs d'événements pour les boutons de langue
    document.getElementById("btn-fr").addEventListener("click", function() {
        showContent("fr");
    });

document.getElementById("btn-en").addEventListener("click", function() {
    showContent("en");
});

document.getElementById("btn-sp").addEventListener("click", function() {
    showContent("sp");
});

// Fonction pour afficher le contenu correspondant à la langue sélectionnée
function showContent(lang) {
    document.getElementById("content-fr").style.display = lang === "fr" ? "block" : "none";
    document.getElementById("content-en").style.display = lang === "en" ? "block" : "none";
    document.getElementById("content-sp").style.display = lang === "sp" ? "block" : "none";
}

    function copyToClipboard(text) {
        const tempInput = document.createElement('input');
        tempInput.style.position = 'absolute';
        tempInput.style.left = '-9999px';
        document.body.appendChild(tempInput);
        tempInput.value = text;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    }
    
        // Récupérer la boîte de gauche par son ID
        const leftBox = document.getElementById('side');
    
        // Récupérer la hauteur de la boîte de gauche
        const leftBoxHeight = leftBox.offsetHeight;
    
        // Définir la hauteur maximale de la page
        document.body.style.maxHeight = leftBoxHeight + 'px';

});
