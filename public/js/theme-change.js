function themeChangeHandler(event) {
  const theme = event.target.value;
  localStorage.setItem('preferredTheme', theme);
  applyTheme();
}

const buttons = document.querySelectorAll('form#themeForm > button');
buttons.forEach((button) => button.addEventListener('click', themeChangeHandler));
