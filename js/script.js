// Function to navigate to a new page
function navigateTo(page) {
    window.location.href = page;
}

// Add event listeners for menu buttons
document.querySelectorAll('.menubutton').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        const targetPage = this.getAttribute('data-target');
        navigateTo(targetPage); // Navigate to the specified page
    });
});

// Check if the menu should be opened based on the URL parameter
function checkMenuStatus() {
    const urlParams = new URLSearchParams(window.location.search);
    const openMenu = urlParams.get('openMenu');
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