import ThemeCustomization from 'themes';
import LandingPage from './views/landing';
import theme from './themes';

export default function App() {
  return (
    <>
      <ThemeCustomization theme={theme}>
        <LandingPage />
      </ThemeCustomization>
    </>
  );
}
