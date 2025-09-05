import { useTheme } from '@mui/material/styles';
import { ThemeMode } from 'config';
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
import StyledSection from './index.styled';

export default function Landing() {
  const theme = useTheme();

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
        <HeaderSection component="header" />
      </Box>
      
      <StyledSection component="section">
        <ProcessScheme />
      </StyledSection>

      <StyledSection component="section" sx={{ bgcolor: 'grey.100' }}>
        <CustomizeSection />
      </StyledSection>

      <StyledSection component="section">
        <FeatureSection />
      </StyledSection>

      <StyledSection id="decisions" component="section" sx={{ bgcolor: 'grey.100' }}>
        <PreBuildDashBoard />
      </StyledSection>

      <StyledSection id="reviews" component="section">
        <PeopleSection />
      </StyledSection>

      <StyledSection id="pricing" component="section" sx={{ py: 0, my: 0 }}>
        <PricingSection />
      </StyledSection>

      <StartupProjectSection component="footer" />

      <FooterSection component="footer" />
    </>
  );
}
