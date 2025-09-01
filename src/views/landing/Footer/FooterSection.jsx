import { 
  Container,
  IconButton,
  Typography,
  Stack,
  Link,
  Box,
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { useState } from 'react';
import PrivacyPolicyModal from '../Privacy/PrivacyPolicyModal';

export default function FooterSection() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
        <Box sx={{ bgcolor: 'dark.dark', py: { xs: 3, sm: 1.5 } }}>
          <Container component="footer">
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ xs: 1.5, sm: 1, md: 3 }}
            >
              <Stack direction="column" spacing={0.5} alignItems={{ xs: 'center', sm: 'flex-start' }} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography color="text.secondary" variant="body2">
                  © Planify is managed by{' '}
                  <Link href="https://utiqs.com/ru/" target="_blank" underline="hover">
                    UtiqSoft
                  </Link>
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  <Link component="button" onClick={handleOpen} underline="hover" sx={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
                    Политика обработки персональных данных
                  </Link>
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={{ xs: 2, sm: 1.5, md: 2 }}>
                <IconButton
                  size="small"
                  href="https://utiqs.com/ru/#contact"
                  target="_blank"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'info.main' } }}
                >
                  <EmailIcon />
                </IconButton>
                <IconButton
                  size="small"
                  href="https://yandex.by/maps/157/minsk/house/Zk4Ycw9pS0YOQFtpfXVxdXhrYQ==/?ll=27.589787%2C53.904453&z=19"
                  target="_blank"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'error.main' } }}
                >
                  <PlaceIcon />
                </IconButton>
                <IconButton
                  size="small"
                  href="https://utiqs.com/ru/#contact"
                  target="_blank"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'success.main' } }}
                >
                  <LocalPhoneIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Container>
        </Box>

      <PrivacyPolicyModal open={open} onClose={handleClose}/>
    </>
  );
}