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
            // Reset the container
            document.getElementById("main-container").innerHTML = "";
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
    // Load curtain menu
    loadComponent('components/curtain_menu.html', 'curtain-menu');
    // Load homepage at startup
    loadComponent('components/welcome.html', 'main-container');

    // Get curtain-menu container to add eventlistener for scrolling by dragging
    const menu = document.getElementById("curtain-menu");
    let isScrolling = false;
    let startX, scrollLeft;
  
    menu.addEventListener("mousedown", function (e) {
      isScrolling = true;
      startX = e.pageX - menu.offsetLeft;
      scrollLeft = menu.scrollLeft;
    });
  
    menu.addEventListener("mouseup", function () {
      isScrolling = false;
    });
  
    menu.addEventListener("mousemove", function (e) {
      if (!isScrolling) return;
      e.preventDefault();
  
      const x = e.pageX - menu.offsetLeft;
  
      const moveX = (x - startX) * 1; // Adjust the sensitivity
  
      menu.scrollLeft = scrollLeft - moveX;
    });

    // Handle touch events
    menu.addEventListener("touchstart", function (e) {
        isScrolling = true;
        startX = e.touches[0].pageX - menu.offsetLeft;
        scrollLeft = menu.scrollLeft;
    });
    
    menu.addEventListener("touchend", function () {
        isScrolling = false;
    });
    
    menu.addEventListener("touchmove", function (e) {
        if (!isScrolling) return;
        e.preventDefault();
    
        const x = e.touches[0].pageX - menu.offsetLeft;
        const moveX = (x - startX) * 2; // Adjust the sensitivity
        menu.scrollLeft = scrollLeft - moveX;
    });
});
