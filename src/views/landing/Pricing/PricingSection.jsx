import { useTheme } from '@mui/material/styles';
import {
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';

import FadeInWhenVisible from '../Animation'; 
import PricingCard from './PricingCard'; 
import { pricingPlans } from './PlansData'; 

export default function PricingPlans() {
  const theme = useTheme();
  const commonCardBg = theme.palette.mode === 'dark' ? '#282C46' : '#F5F7FF';

  return (
      <Box
        sx={{
          py: { xs: 6, md: 12 },
          bgcolor: '#eef2f6',
          position: 'relative'
        }}
      >
        <Container component="section" sx={{ px: { xs: 4, md: 4 } }}>
          <Grid container spacing={3} justifyContent="center" textAlign="center" sx={{ mb: 6 }}>
            <Grid size={12}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2.125rem' },
                  fontWeight: 700,
                  mb: -1
                }}
              >
                Выберите подходящий тариф Planify
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', mb: -2 }}
                align="center"
              >
                Автоматизируйте выездное обслуживание и начните работать системно
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 4, sm: 4 }} justifyContent="center">
            {pricingPlans.map((plan) => (
              <Grid key={plan.id} size={{ md: 4, sm: 6, xs: 12 }}>
                <FadeInWhenVisible>
                  <PricingCard component="article" plan={plan} bgColor={commonCardBg} />
                </FadeInWhenVisible>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
  );
}