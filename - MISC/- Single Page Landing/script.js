document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function (event) {
        event.preventDefault(); // delay navigation

        // reference the bounce class
        this.classList.add('bounce');

        // delay 2 secs for navigation
        setTimeout(() => {
            window.location.href = this.getAttribute('data-href');
        }, 2000);
    });
});