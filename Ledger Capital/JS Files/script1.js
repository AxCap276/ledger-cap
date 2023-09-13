// Get all the dropdown buttons and add a click event listener
const dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});