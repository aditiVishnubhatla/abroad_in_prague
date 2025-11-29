document.addEventListener('DOMContentLoaded', () => {
    // Toggle checklist buttons
    const buttons = document.querySelectorAll('ul.checklist li button');
    buttons.forEach(btn => {
    btn.addEventListener('click', () => btn.classList.toggle('checked'));
    });
    
    // Add new task functionality
    const addForms = document.querySelectorAll('.add-task');
    addForms.forEach(form => {
        const input = form.querySelector('input');
        const addBtn = form.querySelector('button');
        const checklist = form.closest('.city-section').querySelector('ul.checklist');
    
        addBtn.addEventListener('click', () => {
            const value = input.value.trim();
            if (value !== '') {
                // Create the li element
                const li = document.createElement('li');
    
                // Create a span for the task text
                const span = document.createElement('span');
                span.textContent = value;
    
                // Create the button for ✔
                const btn = document.createElement('button');
                btn.textContent = '✔';
                btn.classList.add('check-btn'); // optional, if your CSS targets this
                btn.addEventListener('click', () => btn.classList.toggle('checked'));
    
                // Append span and button to li
                li.appendChild(span);
                li.appendChild(btn);
    
                // Append li to checklist
                checklist.appendChild(li);
    
                // Clear input
                input.value = '';
            }
        });
    });
  
    
    });
    
