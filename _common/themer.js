const preview = Docsify.dom.find('.demo-theme-preview');
const themes = Docsify.dom.findAll('[data-is-theme]');
const defaultThemeTitle = 'vue';
const currentThemeTitle = getCookie('theme') || defaultThemeTitle;
window.setTheme = function (themeTitle) {
  themes.forEach(function (theme) {
    theme.disabled = theme.title !== themeTitle
  });
};
window.setTheme('');
window.setTheme(currentThemeTitle);
preview.onclick = function (e) {
  const title = e.target.getAttribute('data-theme');
  if (title) {
    window.setTheme(title);
    setCookie('theme', title);
  }
};
