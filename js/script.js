// Function to get query parameters
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Check if the menu should be opened based on query parameters
if (getQueryParameter('openMenu') === 'true') {
    document.querySelector('.textbox').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    sessionStorage.setItem('menuOpened', 'true');
    history.replaceState(null, '', window.location.pathname);
} else if (sessionStorage.getItem('menuOpened')) {
    document.querySelector('.textbox').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
} else {
    document.getElementById('menu').style.display = 'none';
}

// Script to toggle menu visibility 
document.getElementById('menuButton').addEventListener('click', function() {
    document.querySelector('.textbox').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    sessionStorage.setItem('menuOpened', 'true');
});

// Allow normal navigation for project button
document.querySelectorAll('.menubutton').forEach(button => {
    button.addEventListener('click', function(event) {
        console.log(this.textContent + ' button clicked!');
    });
});