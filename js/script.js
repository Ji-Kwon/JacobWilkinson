// Check if the menu should be opened based on the URL parameter
function checkMenuStatus() {
    const urlParams = new URLSearchParams(window.location.search);
    const openMensu = urlParams.get('openMenu');
    return openMenu === 'true';
}

// Function to initialize the page
function init() {
    const menuOpened = checkMenuStatus();
    
    // If the menu should be opened, hide the textbox and show the menu
    if (menuOpened) {
        document.querySelector('.textbox').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    }
}

// Script to toggle menu visibility
document.getElementById('menuButton').addEventListener('click', function() {
    // Hide textbox
    document.querySelector('.textbox').style.display = 'none';
    // Open menu
    document.getElementById('menu').style.display = 'block';
});

// Initialize the page
init();