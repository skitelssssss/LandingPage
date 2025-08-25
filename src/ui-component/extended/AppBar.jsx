import PropTypes from 'prop-types';
import { cloneElement } from 'react';

import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { ThemeMode } from 'config';
import Logo from 'ui-component/Logo';

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

const handleLogoClick = (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};


export default function AppBar({ ...others }) {
  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <section aria-labelledby="appbar">
          <Container>
            <Toolbar sx={{ py: 2.5, px: `0 !important` }}>
              <Typography
                component="div" 
                sx={{ flexGrow: 1, textAlign: 'left', cursor: 'pointer' }}
                onClick={handleLogoClick}
                aria-label="На главную"
              >
                <Logo />
              </Typography>
              <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={{ xs: 1.5, md: 2.5 }}>
                <Button component={Link} href="#" disableElevation variant="contained" color="secondary" sx={{ borderRadius: '13px' }}>
                  Купить сейчас
                </Button>
              </Stack>
            </Toolbar>
          </Container>
        </section>
      </MuiAppBar>
    </ElevationScroll>
  );
}

ElevationScroll.propTypes = { children: PropTypes.node, window: PropTypes.any };
