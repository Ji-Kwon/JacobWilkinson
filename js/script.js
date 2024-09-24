// Function to get query parameters
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Check if the menu should be opened based on query parameters
if (getQueryParameter('openMenu') === 'true') {
    // If so, hide the textbox and show the menu
    document.querySelector('.textbox').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    // Set session storage to indicate the menu has been opened
    sessionStorage.setItem('menuOpened', 'true');
    
    // Remove the query parameter from the URL
    history.replaceState(null, '', window.location.pathname);
} else if (sessionStorage.getItem('menuOpened')) {
    // If the menu was previously opened in this session, show it
    document.querySelector('.textbox').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
} else {
    // Otherwise, show the textbox
    document.getElementById('menu').style.display = 'none';
}

// Script to toggle menu visibility 
document.getElementById('menuButton').addEventListener('click', function() {
    // Hide textbox
    document.querySelector('.textbox').style.display = 'none';
    // Show menu
    document.getElementById('menu').style.display = 'block';
    // Set session storage to indicate the menu has been opened
    sessionStorage.setItem('menuOpened', 'true');
});