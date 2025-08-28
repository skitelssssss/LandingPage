import { Masonry } from '@mui/lab';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { cards } from './CardData';
import PeopleCard from './PeopleCard';

export default function PeopleSection() {
  let cardResult = <></>;
  if (cards && cards.length > 0) {
    cardResult = cards.map((card, index) => (
      <Grid key={index}>
        <PeopleCard
          id={card.id}
          image={card.image ? card.image : ''}
          name={card.name}
          tag={card.tag}
          content={card.content}
          view={card.view}
        />
      </Grid>
    ));
  }

  return (
      <Container component="section"sx={{ px: { xs: 4, md: 4 } }}>
        <Grid container spacing={3.5} sx={{ justifyContent: 'center' }}>
          <Grid sx={{ textAlign: 'center' }} size={12}>
            <Stack spacing={1.25} sx={{ alignItems: 'center' }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
                Отзывы клиентов
              </Typography>
              <Typography variant="body2" align="center" sx={{ fontSize: '1rem' }}>
                Реальные пользователи, реальный опыт – посмотрите, что говорят о Planify наши клиенты!
              </Typography>
            </Stack>
          </Grid>

            <Grid size={12}>
              <Stack spacing={2} sx={{ alignItems: 'center' }}>
                <Masonry component="article" columns={{ xs: 1, sm: 2, md: 3, xl: 4 }} spacing={4} >
                  {cardResult}
                </Masonry>
              </Stack>
            </Grid>
        </Grid>
      </Container>
  );
}