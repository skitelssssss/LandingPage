import { styled } from '@mui/material/styles';

const HeaderImage = styled('img')(({ theme }) => ({
  maxWidth: '73%',
  zIndex: 1,
  position: 'absolute',
  bottom: 0,
  right: 0,
  transform: 'translate(-20%, -20%)',
  [theme.breakpoints.up('lg')]: {transform: 'translate(-70%, -25%)'},
  [theme.breakpoints.down('md')]: { display: 'none',}
}));

export default HeaderImage;