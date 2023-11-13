// Function to load HTML components
function loadComponent(componentUrl, containerId) {
    fetch(componentUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            document.getElementById(containerId).innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error fetching the component:', error);
        });
}

const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

// Load header and footer components
document.addEventListener('DOMContentLoaded', function () {
    loadComponent('components/curtain_menu.html', 'curtain-menu');
    loadComponent('components/welcome.html', 'homepage');
});
