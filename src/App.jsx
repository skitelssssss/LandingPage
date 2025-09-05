import ThemeCustomization from 'themes';
import LandingPage from './views/landing';
import theme from './themes';
import { SnackbarProvider } from './contexts/SnackbarContext';
import { PrivacyProvider } from './contexts/PrivacyContext';

export default function App() {
  return (
    <>
      <ThemeCustomization theme={theme}>
        <PrivacyProvider>
          <SnackbarProvider>
            <LandingPage />
          </SnackbarProvider>
        </PrivacyProvider>
      </ThemeCustomization>
    </>
  );
}
