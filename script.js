document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            const isVisible = navMenu.style.display === 'flex';
            navMenu.style.display = isVisible ? 'none' : 'flex';
            if (!isVisible) {
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '70px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = '#ffffff';
                navMenu.style.padding = '1.5rem';
                navMenu.style.borderBottom = '1px solid #e2e8f0';
            }
        });
    }

    // Story search filter
    const searchInput = document.getElementById('searchInput');
    const posts = document.querySelectorAll('.post-card');
    const noResults = document.getElementById('noResults');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            let visibleCount = 0;

            posts.forEach((post) => {
                const title = post.querySelector('h3')?.textContent.toLowerCase() || '';
                const desc = post.querySelector('p')?.textContent.toLowerCase() || '';
                const tag = post.querySelector('.tag')?.textContent.toLowerCase() || '';

                if (title.includes(query) || desc.includes(query) || tag.includes(query)) {
                    post.style.display = '';
                    visibleCount++;
                } else {
                    post.style.display = 'none';
                }
            });

            if (noResults) {
                noResults.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        });
    }
});