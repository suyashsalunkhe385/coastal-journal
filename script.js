// Mobile menu

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


// Search stories

const searchInput = document.getElementById("searchInput");
const posts = document.querySelectorAll(".post-card");
const noResults = document.getElementById("noResults");

if (searchInput) {

    searchInput.addEventListener("input", function() {

        const searchText = searchInput.value.toLowerCase().trim();

        let visiblePosts = 0;

        posts.forEach(function(post) {

            const text = post.textContent.toLowerCase();

            if (text.includes(searchText)) {

                post.style.display = "block";
                visiblePosts++;

            } else {

                post.style.display = "none";

            }

        });


        if (visiblePosts === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    });

}