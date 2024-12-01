document.addEventListener('DOMContentLoaded', () => {
    const loginIcon = document.getElementById('login-icon');
    const searchIcon = document.getElementById('search-icon');
    const cartIcon = document.getElementById('cart-icon');
    const loginModal = document.getElementById('loginModal');
    const searchModal = document.getElementById('searchModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const searchCloseBtn = document.getElementsByClassName('search-close')[0];
    const profileName = document.querySelector('.profile span');
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Sample data for search
    const items = [
        { name: 'Home', link: 'index.html' },
        { name: 'Essence', link: 'essence.html' },
        { name: 'Diva', link: 'diva.html' },
        { name: 'Frost', link: 'frost.html' },
         
    ];
    
    const nav = document.createElement('nav');
    items.forEach(item => {
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.name;
        nav.appendChild(a);
    });
    document.body.appendChild(nav);
    

    loginIcon.onclick = function() {
        loginModal.style.display = "block";
    }

    searchIcon.onclick = function() {
        searchModal.style.display = "block";
    }

    cartIcon.onclick = function() {
        // Implement cart modal functionality if needed
    }

    closeBtn.onclick = function() {
        loginModal.style.display = "none";
    }

    searchCloseBtn.onclick = function() {
        searchModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target === searchModal) {
            searchModal.style.display = "none";
        }
    }

    document.querySelector('#loginModal form').onsubmit = function(event) {
        event.preventDefault(); // Prevent actual form submission
        profileName.textContent = document.getElementById('username').value;
        loginModal.style.display = "none";
    }

    searchBtn.onclick = function() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query) {
            const filteredItems = items.filter(item => item.toLowerCase().includes(query));

            if (filteredItems.length > 0) {
                filteredItems.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'search-result-item';
                    div.textContent = item;
                    searchResults.appendChild(div);
                });
            } else {
                searchResults.innerHTML = '<div class="no-results">Item not found</div>';
            }
        }
    }
});
