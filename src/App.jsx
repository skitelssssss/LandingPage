import ThemeCustomization from 'themes';
import LandingPage from './views/landing';
import theme from './themes';
import { SnackbarProvider } from './contexts/SnackbarContext';

export default function App() {
  return (
    <>
      <ThemeCustomization theme={theme}>
        <SnackbarProvider>
          <LandingPage />
        </SnackbarProvider>
      </ThemeCustomization>
    </>
  );
}
