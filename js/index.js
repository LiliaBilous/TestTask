document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    const rows = document.querySelectorAll(".table__row");

    rows.forEach((row, index) => {
        gsap.from(row, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: row,
            start: "top 98%",
            toggleActions: "play none none none",
          },
        });
      });

  const sidebar = document.querySelector(".aside");
  const content = document.querySelector(".main");
  const menuToggle = document.querySelector(".menu-toggle");
  let isCollapsed = false;

  menuToggle.addEventListener("click", function () {
    if (isCollapsed) {
      gsap.to(sidebar, {
        width: "300px",
        duration: 0.5,
        ease: "power2.out" 
      });
      sidebar.classList.remove("collapce");
      gsap.to(content, {
        marginLeft: "var(--sidebar-width)",
        duration: 0.8, 
        ease: "power2.out"
      })
      content.classList.remove("collapce");
    } else {
      gsap.to(sidebar, {
        width: "80px",
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.to(content, {
        marginLeft: "calc(var(--sidebar-width-min) + 1rem)",
        duration: 0.8,
        ease: "power2.out"
      })
      content.classList.add("collapce");
      sidebar.classList.add("collapce");
    }
    isCollapsed = !isCollapsed;
  });

});
