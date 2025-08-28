import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import { handleScrollTo } from './AppBar'

export default function DesktopNavbar() {
  return (
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
        sx={{ borderRadius: '13px', textTransform: 'none' }}
        onClick={handleScrollTo('home')}
      >
        Купить сейчас
      </Button>
    </Stack>
  );
}