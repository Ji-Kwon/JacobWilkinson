// Check if the user has already opened the menu
if (sessionStorage.getItem('menuOpened')) {
    // If so, hide the textbox and show the menu
    document.querySelector('.textbox').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
} else {
    // Otherwise, show the textbox and menu will remain hidden
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