document.addEventListener('DOMContentLoaded', () => {
    const sidenav = M.Sidenav.getInstance(document.getElementById('nav-mobile'));

    // Close sidebar on link click
    for (const link of document.querySelectorAll('.sidenav li a')) {
        link.addEventListener('click', () => sidenav.close());
    }

    // Init AOS
    AOS.init();
});
