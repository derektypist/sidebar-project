// Set Up Constants

const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// Add Event Listeners
toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
});