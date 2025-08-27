import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import { IconBox, IconFriends, IconBasketDollar } from '@tabler/icons-react';

import { handleScrollTo } from './AppBar';
import { useState } from 'react';

export default function MobileNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggler = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
      <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={drawerOpen} onClose={drawerToggler(false)}>
        {drawerOpen && (
          <Box
            sx={{ width: 'auto' }}
            role="presentation"
            onClick={drawerToggler(false)}
            onKeyDown={drawerToggler(false)}
          >
            <List>
              <Link sx={{ textDecoration: 'none' }} href="#decisions" target="_blank" onClick={handleScrollTo('decisions')}>
                <ListItemButton>
                  <ListItemIcon>
                    <IconBox size={20} color="secondary.main" />
                  </ListItemIcon>
                  <ListItemText primary="Приложение" />
                </ListItemButton>
              </Link>
              <Link sx={{ textDecoration: 'none' }} href="#reviews" target="_blank" onClick={handleScrollTo('reviews')}>
                <ListItemButton>
                  <ListItemIcon>
                    <IconFriends size={20} color="secondary.main" />
                  </ListItemIcon>
                  <ListItemText primary="Отзывы" />
                </ListItemButton>
              </Link>
              <Link sx={{ textDecoration: 'none' }} href="#pricing" target="_blank" onClick={handleScrollTo('pricing')}>
                <ListItemButton>
                  <ListItemIcon>
                    <IconBasketDollar size={20} color="secondary.main" />
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
  );
}