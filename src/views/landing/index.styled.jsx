import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12.5),
  paddingBottom: theme.spacing(12.5),
  bgcolor: 'background.default',
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

export default StyledSection;