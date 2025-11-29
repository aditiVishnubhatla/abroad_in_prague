document.addEventListener('DOMContentLoaded', () => {
    // Checklist toggle
    const buttons = document.querySelectorAll('ul.checklist li button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('checked');
        });
    });
    
    // Add new task
    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            const value = input.value.trim();
            if (value) {
                const ul = btn.closest('.city-section').querySelector('ul.checklist');
                const li = document.createElement('li');
                li.innerHTML = `${value} <button>✔</button>`;
                ul.appendChild(li);
    
                // Add event listener to new button
                li.querySelector('button').addEventListener('click', e => {
                    e.target.classList.toggle('checked');
                });
    
                input.value = '';
            }
        });
    });

    // Accessible Star Rating
    const stars = document.querySelectorAll('.star-btn');
    const ratingInput = document.getElementById('rating');
    
    if (stars.length && ratingInput) {
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = star.getAttribute('data-value');
                ratingInput.value = value;
                stars.forEach(s => {
                    s.style.backgroundColor = s.getAttribute('data-value') <= value ? 'gold' : '';
                    s.setAttribute('aria-checked', s.getAttribute('data-value') === value ? 'true' : 'false');
                });
            });
        });
    }
});
