import { Container, Grid } from '@mui/material';

import AllowSection from './AllowSection';
import FeaturesSection from './FeaturesSection';

export default function CustomizeSection() {
  return (
      <Container component="section" sx={{ px: { xs: 4, md: 4 } }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center">
          
          <Grid size={12}>
            <AllowSection component="article" />
          </Grid>

          <Grid size={12}>
            <FeaturesSection component="article" />
          </Grid>

        </Grid>
      </Container>
  );
}