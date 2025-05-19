// Theme Switcher
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference or use system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  // Update toggle button state
  updateToggleButton();
  
  // Theme toggle functionality
  document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button state
    updateToggleButton();
  });
  
  function updateToggleButton() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      themeToggle.innerHTML = '<i class="fa fa-sun-o"></i>';
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
      themeToggle.title = 'Switch to light mode';
    } else {
      themeToggle.innerHTML = '<i class="fa fa-moon-o"></i>';
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
      themeToggle.title = 'Switch to dark mode';
    }
  }
});