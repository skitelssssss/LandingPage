import PropTypes from 'prop-types';
import { cloneElement } from 'react';

import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MuiAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { ThemeMode } from 'config';
import Logo from 'ui-component/Logo';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';


function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  return cloneElement(children, {
    elevation: trigger ? 1 : 0,
    style: {
      backgroundColor: theme.palette.mode === ThemeMode.DARK && trigger ? theme.palette.dark[800] : theme.palette.background.default,
      color: theme.palette.text.dark
    }
  });
}

export default function AppBar({ ...others }) {
  return (
    <ElevationScroll {...others}>
      <MuiAppBar
        sx={{
          zIndex: 1,
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

ElevationScroll.propTypes = { children: PropTypes.node, window: PropTypes.any };
