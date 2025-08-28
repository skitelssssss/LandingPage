import { Container, Grid, Typography } from '@mui/material';

import SavingTimeCard from './SavingTimeCard';
import AvoidMistakesCard from './AvoidMistakesCard';
import FullControlCard from './FullControlCard';
import IncreasedLoyaltyCard from './IncreasedLoyaltyCard';

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
        // TODO: это не отдельные компоненты
        <Grid size={12}>
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            <Grid size={{ md: 4.9, sm: 6 }}>
              <SavingTimeCard component="article" />
            </Grid>
            <Grid size={{ md: 4.9, sm: 6 }}>
              <AvoidMistakesCard component="article" />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={12}>
          <Grid container spacing={4} sx={{ justifyContent: 'center', mt: -3.5 }}>
            <Grid size={{ md: 4.9, sm: 6 }}>
              <FullControlCard component="article" />
            </Grid>
            <Grid size={{ md: 4.9, sm: 6 }}>
              <IncreasedLoyaltyCard component="article" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
