import MuiAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Logo from 'ui-component/Logo';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import ElevationScroll from './ElevationScroll'; 

export default function AppBar({ ...others }) {
  return (
    <ElevationScroll {...others}>
      <MuiAppBar sx={{
            zIndex: 0.5,
          }}
        >
        <Container component="section">
          <Toolbar sx={{ py: 1.7, px: `0 !important` }}>
            <Typography
              component="div"
              sx={{ flexGrow: 1, textAlign: 'left', cursor: 'pointer' }}
              onClick={handleScrollTo('home')}
            >
              <Logo />
            </Typography>

            <DesktopNavbar component="section"/>
            <MobileNavbar component="section"/>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
}

export const handleScrollTo = (id) => (event) => {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};