import PropTypes from 'prop-types';
import { cloneElement } from 'react';
import { useState } from 'react';

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
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IconBasketDollar, IconFriends, IconBox } from '@tabler/icons-react';

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

  const handleScrollTo = (id) => (event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


export default function AppBar({ ...others }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggler = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container component="section">
          <Toolbar sx={{ py: 2.5, px: `0 !important` }}>
            <Typography
              component="div"
              sx={{ flexGrow: 1, textAlign: 'left', cursor: 'pointer' }}
              onClick={handleScrollTo('home')}
            >
              <Logo />
            </Typography>

            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={{ xs: 1.5, md: 2.5 }}>
              <Button component={Link} href="#decisions" onClick={handleScrollTo('decisions')} disableElevation color="inherit">
                Приложение
              </Button>
              <Button component={Link} href="#reviews" onClick={handleScrollTo('reviews')} disableElevation color="inherit">
                Отзывы
              </Button>
              <Button component={Link} href="#pricing" onClick={handleScrollTo('pricing')} disableElevation color="inherit">
                Тарифы
              </Button>
              <Button
                component={Link}
                href="#"
                disableElevation
                variant="contained"
                color="secondary"
                sx={{ borderRadius: '13px' }}
                onClick={handleScrollTo('home')}
              >
                Купить сейчас
              </Button>
            </Stack>

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerOpen} 
                onClose={drawerToggler(false)}
              >
                {drawerOpen && (
                  <Box
                    sx={{ width: 'auto' }}
                    role="presentation"
                    onClick={drawerToggler(false)}
                    onKeyDown={drawerToggler(false)}
                  >
                    <List>
                      <Link sx={{ textDecoration: 'none' }} href="#decisions" target="_blank" onClick={handleScrollTo('features')}>
                        <ListItemButton>
                          <ListItemIcon>
                            <IconBox/>
                          </ListItemIcon>
                          <ListItemText primary="Приложение" />
                        </ListItemButton>
                      </Link>
                      <Link sx={{ textDecoration: 'none' }} href="#reviews" target="_blank" onClick={handleScrollTo('reviews')}>
                        <ListItemButton>
                          <ListItemIcon>
                            <IconFriends/>
                          </ListItemIcon>
                          <ListItemText primary="Отзывы" />
                        </ListItemButton>
                      </Link>
                      <Link sx={{ textDecoration: 'none' }} href="#pricing" target="_blank" onClick={handleScrollTo('pricing')}>
                        <ListItemButton>
                          <ListItemIcon>
                            <IconBasketDollar/>
                          </ListItemIcon>
                          <ListItemText primary="Тарифы" />
                        </ListItemButton>
                      </Link>
                      <Button
                        component={Link}
                        href="#"
                        disableElevation
                        variant="contained"
                        color="secondary"
                        onClick={handleScrollTo('home')}
                          sx={{
                            borderRadius: '13px',
                            marginLeft: '13px',
                            mt: '7px',
                            mb: '9px'
                            }}
                      >
                        Купить сейчас
                      </Button>
                    </List>
                  </Box>
                )}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
}

ElevationScroll.propTypes = { children: PropTypes.node, window: PropTypes.any };
