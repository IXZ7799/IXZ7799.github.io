document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    const applyTheme = (isNightMode) => {
        body.classList.toggle('night-mode', isNightMode);
        body.classList.toggle('day-mode', !isNightMode);

        toggleButton.textContent = isNightMode ? '☀️' : '🌙';

        const buttons = document.querySelectorAll('.theme-toggle');
        buttons.forEach(button => {
            button.classList.toggle('btn-outline-dark', !isNightMode);
            button.classList.toggle('btn-outline-light', isNightMode);
        });

        const listItems = document.querySelectorAll('.list-group-item');
        listItems.forEach(item => {
            item.classList.toggle('list-group-item-dark', !isNightMode);
            item.classList.toggle('list-group-item-light', isNightMode);
        });
    };

    const savedTheme = localStorage.getItem('theme');
    const isNightMode = savedTheme === 'night';
    applyTheme(isNightMode);

    toggleButton.addEventListener('click', function () {
        const newIsNightMode = !body.classList.contains('night-mode');
        applyTheme(newIsNightMode);

        localStorage.setItem('theme', newIsNightMode ? 'night' : 'day');
    });
});
