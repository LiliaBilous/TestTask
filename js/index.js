document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".aside");
    const menuToggle = document.querySelector(".menu-toggle");
    let isExpanded = false;
    
    menuToggle.addEventListener("click", function () {
        isExpanded = !isExpanded;
        updateSidebar();
    });

    function updateSidebar() {
        if (isExpanded) {
            sidebar.classList.add("collapce");
        } else {
            sidebar.classList.remove("collapce");
        }
    }
});
