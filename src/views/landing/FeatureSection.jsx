import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';

import FadeInWhenVisible from './Animation';
import { ThemeMode } from 'config';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';

import Offer1 from 'assets/images/landing/offer/offer-1.png';
import Offer2 from 'assets/images/landing/offer/offer-2.png';
import Offer3 from 'assets/images/landing/offer/offer-3.png';
import Offer4 from 'assets/images/landing/offer/offer-4.png';

function OfferCard({ title, caption, image }) {
  const theme = useTheme();
  const avatarSx = {
    bgcolor: 'transparent',
    color: 'secondary.main',
    width: 120,
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    '& img': {
      objectFit: 'contain',
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  };

  return (
    <FadeInWhenVisible>
      <SubCard
        sx={{
          bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.800' : 'grey.100',
          borderColor: 'divider',
          '&:hover': { boxShadow: 'none' },
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Stack spacing={4} justifyContent="center" alignItems="center">
          <Avatar variant="rounded" sx={avatarSx}>
            <CardMedia component="img" src={image} alt="" />
          </Avatar>
          <Stack spacing={2}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>
              {caption}
            </Typography>
          </Stack>
        </Stack>
      </SubCard>
    </FadeInWhenVisible>
  );
}

export default function FeatureSection() {
  return (
      <Container sx={{ px: { xs: 4, md: 0 } }}>
        <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
          <Grid sx={{ textAlign: 'center' }} size={{ xs: 12, md: 6 }}>
            <Grid container spacing={1.5}>
              <Grid size={12}>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 0 }}>
                  Как Planify решает ваши задачи?
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="body2" sx={{ fontSize: '1rem', mb: -2 }}>
                  С Planify вы забудете о хаосе в заявках, несогласованных графиках и потерянных заказах. Мы помогаем:
                </Typography>
              </Grid>
            </Grid>
          </Grid>
            <Grid size={12}>
              <Grid container spacing={4} sx={{ justifyContent: 'center', '&> .MuiGrid-root > div': { height: '100%' } }}>
                <Grid size={{ md: 4.9, sm: 6 }}>
                  <article aria-labelledby="saving-time">
                    <OfferCard
                      title="Сэкономить время"
                      caption="Автоматизация сокращает время на оформление и выполнение заказов"
                      image={Offer1}
                    />
                  </article>
                </Grid>
                <Grid size={{ md: 4.9, sm: 6 }}>
                  <article aria-labelledby="avoiding-mistakes">
                    <OfferCard
                      title="Избежать ошибок"
                      caption="Прозрачные процессы и цифровые чек-листы минимизируют человеческий фактор"
                      image={Offer2}
                    />
                  </article>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12}>
              <Grid container spacing={4} sx={{ justifyContent: 'center', '&> .MuiGrid-root > div': { height: '100%' }, mt: -3.5  }}>
                <Grid size={{ md: 4.9, sm: 6 }}>
                  <article aria-labelledby="full-control">
                    <OfferCard
                      title="Контролировать всё"
                      caption="Отслеживайте заявки, сотрудников, материалы и статусы работ в реальном времени"
                      image={Offer3}
                    />
                  </article>
                </Grid>
                <Grid size={{ md: 4.9, sm: 6 }}>
                <article aria-labelledby="increased-loyalty">
                  <OfferCard
                    title="Повысить лояльность клиентов"
                    caption="Быстрое реагирование, фотофиксация и опросы после обслуживания"
                    image={Offer4}
                  />
                </article>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </Container>
  );
}

OfferCard.propTypes = { title: PropTypes.string, caption: PropTypes.string, image: PropTypes.string };
