sidebar = document.querySelector('.sidebar');
sidebarToggle = document.querySelector('.sidebar-toggle');
closeBtn = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
