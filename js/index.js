document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".aside");
    const content = document.querySelector(".main");
    const menuToggle = document.querySelector(".menu-toggle");
    let isExpanded = false;
    
    menuToggle.addEventListener("click", function () {
        isExpanded = !isExpanded;
        updateSidebar();
    });

    function updateSidebar() {
        if (isExpanded) {
            content.classList.add("collapce");
            sidebar.classList.add("collapce");
        } else {
            sidebar.classList.remove("collapce");
            content.classList.remove("collapce");
        }
    }
    gsap.registerPlugin(ScrollTrigger);

    const rows = document.querySelectorAll('.table__row');
    rows.forEach((row, index) => {
        gsap.from(row, {
          opacity: 0,
          y: 50, 
          duration: 0.6,
          delay: index * 0.1, 
          scrollTrigger: {
            trigger: row, 
            start: 'top 98%', 
            toggleActions: 'play none none none',
          }
        });
})
})
