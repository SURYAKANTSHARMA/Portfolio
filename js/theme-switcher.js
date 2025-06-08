document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const darkClass = 'dark-mode';

  // Set icon
  function setIcon(isDark) {
    if (!themeToggle) return;
    themeToggle.innerHTML = isDark
      ? '<i class="fa fa-sun-o"></i>'
      : '<i class="fa fa-moon-o"></i>';
  }

  // Apply theme
  function applyTheme(isDark) {
    if (isDark) {
      body.classList.add(darkClass);
    } else {
      body.classList.remove(darkClass);
    }
    setIcon(isDark);
  }

  // Load preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  applyTheme(isDark);

  // Toggle on click
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      isDark = !body.classList.contains(darkClass);
      applyTheme(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});
