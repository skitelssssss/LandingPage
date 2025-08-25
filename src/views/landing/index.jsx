import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import AppBar from 'ui-component/extended/AppBar';
import HeaderSection from './HeaderSection';
import FeatureSection from './FeatureSection';
import PeopleSection from './PeopleSection';
import FooterSection from './FooterSection';
import CustomizeSection from './CustomizeSection';
import PreBuildDashBoard from './PreBuildDashBoard';
import StartupProjectSection from './StartupProjectSection';
import FeatureProcess from './FeatureProcess';
import CardSection from './CardSection';

import { ThemeMode } from 'config';

export default function Landing() {
  const theme = useTheme();

  return (
    <>
      <Box
        id="home"
        component="header"
        sx={{
          overflowX: 'hidden',
          overflowY: 'clip',
          background:
            theme.palette.mode === ThemeMode.DARK
              ? theme.palette.background.default
              : `linear-gradient(360deg, ${theme.palette.grey[100]} 1.09%, ${theme.palette.background.paper} 100%)`
        }}
      >
        <AppBar />
        <HeaderSection />
      </Box>

      <Box component="section" sx={{ py: 12.5, bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.dark' : 'background.default' }}>
        <FeatureProcess />
      </Box>

      <Box component="section" sx={{ py: 12.5, bgcolor: theme.palette.mode === ThemeMode.DARK ? 'background.default' : 'grey.100' }}>
        <CustomizeSection />
      </Box>

      <Box component="section" sx={{ py: 12.5, bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.dark' : 'background.default' }}>
        <FeatureSection />
      </Box>

      <Box component="section" sx={{ py: 12.5, bgcolor: theme.palette.mode === ThemeMode.DARK ? 'background.default' : 'grey.100' }}>
        <PreBuildDashBoard />
      </Box>

      <Box component="section" sx={{ py: 12.5, bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.dark' : 'background.default' }}>
        <PeopleSection />
      </Box>

      <Box component="section">
        <CardSection />
      </Box>

      <Box component="footer" sx={{ py: 0 }}>
        <StartupProjectSection />
      </Box>

      <Box component="footer" sx={{ pb: 0 }}>
        <FooterSection />
      </Box>
    </>
  );
}
