import { useMemo } from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { motion } from 'framer-motion';

import AnimateButton from 'ui-component/extended/AnimateButton';

import { ThemeDirection, ThemeMode, DASHBOARD_PATH } from 'config';
import useConfig from 'hooks/useConfig';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import dashboard from 'assets/images/landing/hero-dashboard.svg';
import BgLight from 'assets/images/landing/bg-hero-block-light.png';
import FeedbackFormModal from './FeedbackFormModal';

const HeaderImage = styled('img')(({ theme }) => ({
  maxWidth: '73%',
  borderRadius: 20,
  transform: theme.direction === 'rtl' ? 'scale(1.63)' : 'scale(1.55)',
  transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
  [theme.breakpoints.down('xl')]: {
    transform: 'scale(1.5)'
  },
  [theme.breakpoints.down('lg')]: {
    transform: 'scale(1.2)'
  }
}));

const HeaderAnimationImage = styled('img')({
  maxWidth: '100%',
  filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
});

export default function HeaderSection() {
  const { mode, themeDirection } = useConfig();

  const headerSX = { fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem', lg: '3.5rem' } };

  const HeaderAnimationImagememo = useMemo(
    () => (
      <HeaderAnimationImage
        src={mode === ThemeMode.DARK ? BgDark : BgLight}
        alt="Planify"
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'absolute',
          filter: 'none',
          bottom: { md: 0 },
          right: 0,
          width: '50%',
          transformOrigin: '50% 50%',
          transform: themeDirection === ThemeDirection.RTL ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      />
    ),
    [themeDirection, mode]
  );

  return (
    <section aria-labelledby="blank screen">
      <Box sx={{ height: { xs: '80vh', sm: '90vh', md: '100vh'}, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container sx={{ px: { xs: 4, md: 0 } }}>
          <Grid
            container
            sx={{ justifyContent: 'space-between', alignItems: 'center', mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <Grid container spacing={6}>
                <Grid size={12}>
                  <motion.div
                    initial={{ opacity: 0, translateY: 550 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                  >
                    <Stack spacing={1}>
                      <Typography variant="h1" sx={{ textAlign: { xs: 'center', md: 'left' }, ...headerSX }}>
                        Planify — управление выездным обслуживанием без лишней суеты
                      </Typography>
                    </Stack>
                  </motion.div>
                </Grid>
                <Grid sx={{ mt: -2.5, textAlign: { xs: 'center', md: 'left' } }} size={12}>
                  <motion.div
                    initial={{ opacity: 0, translateY: 550 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ textAlign: { xs: 'center', md: 'left' }, color: 'text.primary', fontSize: { xs: '1rem', md: '1.125rem' } }}
                    >
                      Добро пожаловать в Planify — умное решение для автоматизации выездного сервиса. Оптимизируйте процессы, сокращайте время и исключайте ошибки — всё в одном приложении
                    </Typography>
                  </motion.div>
                </Grid>
                <Grid size={12}>
                  <motion.div
                    initial={{ opacity: 0, translateY: 550 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
                  >
                    <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <Grid>
                        <AnimateButton>
                          <Button
                            component={Link}
                            to={DASHBOARD_PATH}
                            target="_blank"
                            size="large"
                            variant="contained"
                            color="secondary"
                            startIcon={<PlayArrowIcon />}
                            href="#"
                            sx={{ borderRadius: '13px' }} 
                          >
                            Попробовать демо
                          </Button>
                        </AnimateButton>
                      </Grid>
                      <Grid>
                        <FeedbackFormModal />
                      </Grid>
                    </Grid>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
            <Grid sx={{ display: { xs: 'none', md: 'flex' } }} size={{ xs: 12, md: 3.1 }}>
              <Box sx={{ position: 'relative', mt: 8.75, zIndex: 9 }}>
                <HeaderImage src={dashboard} alt="Planify ;(" />
              </Box>
              {HeaderAnimationImagememo}
            </Grid>
          </Grid>
        </Container>
      </Box>  
    </section>
  );
}
