document.querySelectorAll('.faq-question').forEach((item) => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('i');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
        } else {
            answer.style.display = 'block';
            icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
        }
    });
});

function loadVideo(container) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/pL9Og5eDaRc?autoplay=1');
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.setAttribute('allowfullscreen', '');

    container.innerHTML = '';
    container.appendChild(iframe);
}

