import '../styles/landingpg.css';
import '../styles/Singin.css';
import '../styles/dhasboard.css';
import App from './views/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.initialLoad(); // Ganti ini menjadi initialLoad
});
