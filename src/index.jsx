import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'contexts/ConfigContext';
import App from 'App';
import 'assets/scss/style.scss';
import 'yet-another-react-lightbox/styles.css';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
