import { useMemo } from 'react';
import { ThemeMode, DASHBOARD_PATH } from 'config';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IconMessage } from '@tabler/icons-react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AnimateButton from 'ui-component/extended/AnimateButton';
import useConfig from 'hooks/useConfig';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import dashboard from 'assets/images/landing/hero-dashboard.svg';
import BgLight from 'assets/images/landing/bg-hero-block-light.png';
import FeedbackFormModal from '../FeedbackFormModal/FeedbackFormModal';
import HeaderImage from './HeaderImage'
import HeaderAnimationImage from './HeaderAnimationImage';

export default function HeaderSection( {onPrivacyPolicyOpen} ) {
  const { mode, themeDirection } = useConfig();
  const [openFeedback, setOpenFeedback] = useState(false);
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
          bottom: 0,
          right: 0,
          maxHeight: '70%',
        }}
      />
    ),
    [themeDirection, mode]
  );

  return (
      <Box sx={{ height: { xs: '89vh', sm: '90vh', md: '100vh'}, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <Container component="header" sx={{px: { xs: 4, md: 4 } }}>
          <Grid
            container
            sx={{ justifyContent: 'space-between', alignItems: 'center', mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
          >
            <Grid size={{ xs: 12, md: 5,  }}>
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
                      variant="body2"
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
                            size="large"
                            variant="contained"
                            color="secondary"
                            startIcon={<PlayArrowIcon />}
                            href="#"
                            sx={{ borderRadius: '13px', textTransform: 'none', zIndex: '1' }} 
                          >
                            Попробовать демо
                          </Button>
                        </AnimateButton>
                      </Grid>
                      <Grid>
                        <AnimateButton>
                          <Button
                            onClick={() => setOpenFeedback(true)}
                            size="large"
                            variant="outlined"
                            color="text.primary"
                            startIcon={<IconMessage size={20} />}
                            sx={{ borderRadius: '13px', textTransform: 'none', zIndex: '1' }}
                          >
                            Связаться с нами
                          </Button>
                        </AnimateButton>
                      </Grid>
                      <Grid>
                        <FeedbackFormModal onPrivacyPolicyOpen={onPrivacyPolicyOpen} open={openFeedback} onClose={() => setOpenFeedback(false)} />
                      </Grid>
                    </Grid>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
                <HeaderImage src={dashboard} alt="Planify ;(" />
              {HeaderAnimationImagememo}
          </Grid>
        </Container>
      </Box>    
    );
}
