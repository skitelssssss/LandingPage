import { Container, Grid, Typography } from '@mui/material';
import { cards } from './Card';
import OfferCard from './OfferCard';

export default function FeatureSection() {
  return (
    <Container component="section" sx={{ px: { xs: 4, md: 0 } }}>
      <Grid container spacing={7.5} sx={{ justifyContent: 'center' }}>
        <Grid sx={{ textAlign: 'center' }} size={{ xs: 12, md: 6 }}>
          <Grid container spacing={1.5}>
            <Grid size={12}>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 0 }}
              >
                Как Planify решает ваши задачи?
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', mb: -2 }}
              >
                С Planify вы забудете о хаосе в заявках, несогласованных графиках и потерянных заказах. Мы помогаем:
              </Typography>
            </Grid>
          </Grid>
        </Grid>
    
        <Grid size={12}>
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {cards.map((card) => (
              <Grid component="article" size={{ md: 4.9, sm: 6 }}>
                <OfferCard
                  title={card.title}
                  caption={card.caption}
                  image={card.image}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}