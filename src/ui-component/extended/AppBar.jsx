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
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ListItemIcon from '@mui/material/ListItemIcon';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShopIcon from '@mui/icons-material/Shop';

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
        <section aria-labelledby="appbar">
          <Container>
            <Toolbar sx={{ py: 2.5, px: `0 !important` }}>
              <Typography
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', cursor: 'pointer' }}
                onClick={handleScrollTo('home')}
              >
                <Logo />
              </Typography>

              <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={{ xs: 1.5, md: 2.5 }}>
                <Button component={Link} href="#about" onClick={handleScrollTo('about')} disableElevation color="inherit" >
                  Что такое Planify?
                </Button>
                <Button component={Link} href="#features" onClick={handleScrollTo('features')} disableElevation color="inherit">
                  Возможности
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
                        <Link component="a"  sx={{ textDecoration: 'none' }} href="#about" target="_blank" onClick={handleScrollTo('about')}>
                          <ListItemButton>
                            <ListItemIcon>
                              <QuestionMarkIcon fontSize="small" color="secondary" />
                            </ListItemIcon>
                            <ListItemText primary="Что такое Planify?" />
                          </ListItemButton>
                        </Link>
                        <Link sx={{ textDecoration: 'none' }} href="#features" target="_blank" onClick={handleScrollTo('features')}>
                          <ListItemButton>
                            <ListItemIcon>
                              <PriorityHighIcon fontSize="small" color="secondary" />
                            </ListItemIcon>
                            <ListItemText primary="Возможности" />
                          </ListItemButton>
                        </Link>
                        <Link sx={{ textDecoration: 'none' }} href="#reviews" target="_blank" onClick={handleScrollTo('reviews')}>
                          <ListItemButton>
                            <ListItemIcon>
                              <ReviewsIcon fontSize="small" color="secondary" />
                            </ListItemIcon>
                            <ListItemText primary="Отзывы" />
                          </ListItemButton>
                        </Link>
                        <Link sx={{ textDecoration: 'none' }} href="#pricing" target="_blank" onClick={handleScrollTo('pricing')}>
                          <ListItemButton>
                            <ListItemIcon>
                              <AttachMoneyIcon fontSize="small" color="secondary" />
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
        </section>
      </MuiAppBar>
    </ElevationScroll>
  );
}

ElevationScroll.propTypes = { children: PropTypes.node, window: PropTypes.any };
