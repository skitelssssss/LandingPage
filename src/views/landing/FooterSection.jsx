import Container from '@mui/material/Container';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function FooterSection() {
  return (
    <>
      <footer aria-labelledby="footer">
        <Box sx={{ bgcolor: 'dark.dark', py: { xs: 3, sm: 1.5 } }}>
          <Container>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ xs: 1.5, sm: 1, md: 3 }}
            >
              <Typography color="text.secondary">
                © Planify is managed by{' '}
                <Link href="https://utiqs.com/ru/" target="_blank" underline="hover">
                  UtiqSoft
                </Link>
              </Typography>
              <Stack direction="row" alignItems="center" spacing={{ xs: 2, sm: 1.5, md: 2 }}>
                <IconButton
                  size="small"
                  href="https://utiqs.com/ru/#contact"
                  target="_blank"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'info.main' } }}
                >
                  <EmailIcon size={30} />
                </IconButton>
                <IconButton
                  size="small"
                  href="https://yandex.by/maps/157/minsk/house/Zk4Ycw9pS0YOQFtpfXVxdXhrYQ==/?ll=27.589787%2C53.904453&z=19"
                  target="_blank"
                >
                  <PlaceIcon sx={{ color: 'text.secondary', '&:hover': { color: 'error.main' } }} />
                </IconButton>
                <IconButton
                  size="small"
                  href="https://utiqs.com/ru/#contact"
                  target="_blank"
                >
                  <LocalPhoneIcon sx={{ color: 'text.secondary', '&:hover': { color: 'success.main' } }} />
                </IconButton>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </footer>
    </>
  );
}
