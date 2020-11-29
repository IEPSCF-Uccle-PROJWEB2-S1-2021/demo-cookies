const body = document.body;

function applyTheme() {
  const theme = localStorage.getItem('preferredTheme') || 'light';
  let themeClass = '';
  switch (theme) {
    case 'dark':
      themeClass = 'bg-dark text-white';
      break;
    case 'light':
      themeClass = 'bg-light text-dark';
      break;
    case 'green':
      themeClass = 'bg-success text-white';
      break;
    case 'blue':
      themeClass = 'bg-info text-dark';
      break;
    case 'yellow':
      themeClass = 'bg-warning text-dark';
      break;
    default:
      themeClass = 'bg-light text-dark';
      break;
  }
  body.className = themeClass;
}

applyTheme();
