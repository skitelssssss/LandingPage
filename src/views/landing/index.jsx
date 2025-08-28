import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import AppBar from 'ui-component/extended/AppBar/AppBar';
import HeaderSection from './Header/HeaderSection';
import FeatureSection from './FeatureSection/FeatureSection';
import PeopleSection from './FeedBack/PeopleSection';
import FooterSection from './Footer/FooterSection';
import CustomizeSection from './Opportunities/CustomizeSection';
import PreBuildDashBoard from './DashBoard/PreBuildDashBoard';
import StartupProjectSection from './Startup/StartupProjectSection';
import ProcessScheme from './ProcessScheme/ProcessScheme';
import PricingSection from './Pricing/PricingSection';

import { ThemeMode } from 'config';
import { styled } from '@mui/material/styles';

export default function Landing() {
  const theme = useTheme();

  const Section = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(12.5),
    paddingBottom: theme.spacing(12.5),
    bgcolor: 'background.default',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    }
  }));

  return (
    <>
      <Box
        id="home"
        sx={{
          overflowX: 'hidden',
          overflowY: 'clip',
          background:
            theme.palette.mode === ThemeMode.DARK
              ? theme.palette.background.default
              : `linear-gradient(360deg, ${theme.palette.grey[100]} 1.09%, ${theme.palette.background.paper} 100%)`
        }}
      >
        <AppBar cmponent="section"/>
        <HeaderSection component="header"/>
      </Box>
      
      <Section component="section">
        <ProcessScheme />
      </Section>

      <Section component="section" sx={{ bgcolor: 'grey.100' }}>
        <CustomizeSection />
      </Section>

      <Section component="section">
        <FeatureSection />
      </Section>

      <Section id="decisions" component="section" sx={{ bgcolor: 'grey.100' }}>
        <PreBuildDashBoard />
      </Section>

      <Section id="reviews" component="section">
        <PeopleSection />
      </Section>

      <Box id="pricing" component="section" >
        <PricingSection />
      </Box>

      <Box component="footer">
        <StartupProjectSection />
      </Box>

      <Box component="footer">
        <FooterSection />
      </Box>
    </>
  );
}
