document.addEventListener('DOMContentLoaded', function () {
    const emailLink = document.getElementById('email-link');

    emailLink.addEventListener('click', function (event) {
        event.preventDefault();
        const email = emailLink.textContent.trim();
        
        copyToClipboard(email);
        alert('Email copied to clipboard: ' + email);
    });

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
