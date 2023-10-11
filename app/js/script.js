const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const radioButtons = document.querySelectorAll('.toggle__wrapper input');

const COLOR_MODE_LOCAL_STORAGE_KEY = 'colorMode';

const getColorModeFromLocalStorage = () => {
  return localStorage.getItem(COLOR_MODE_LOCAL_STORAGE_KEY);
};

const setColorModeToLocalStorage = (mode) => {
  localStorage.setItem(COLOR_MODE_LOCAL_STORAGE_KEY, mode);
};

const getColorModeFromPreferences = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else {
    return 'light';
  }
};

const setDarkMode = () => {
  document.body.classList = 'dark';
  setColorModeToLocalStorage('dark');
};

const setLightMode = () => {
  document.body.classList = 'light';
  setColorModeToLocalStorage('light');
};

const loadAndUpdateColor = () => {
  const colorMode = getColorModeFromLocalStorage() || getColorModeFromPreferences();
  if (colorMode === 'dark') {
    darkButton.click();
  } else {
    lightButton.click();
  }
};

radioButtons.forEach(button => {
  button.addEventListener('change', () => {
    if (darkButton.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  });
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (event.matches) {
    darkButton.click();
  } else {
    lightButton.click();
  }
});

loadAndUpdateColor();
