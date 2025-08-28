import { useTheme } from '@mui/material/styles';
import { Typography, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import FadeInWhenVisible from '../Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { ThemeMode } from 'config';


export default function OfferCard({ title, caption, image }) {
  const theme = useTheme();
  const avatarSx = {
    bgcolor: 'transparent',
    color: 'secondary.main',
    width: 120,
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    '& img': {
      objectFit: 'contain',
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  };

  return (
    <FadeInWhenVisible>
      <SubCard
        sx={{
          bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.800' : 'grey.100',
          borderColor: 'divider',
          '&:hover': { boxShadow: 'none' },
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Stack spacing={4} justifyContent="center" alignItems="center">
          <Avatar variant="rounded" sx={avatarSx}>
            <CardMedia component="img" src={image} alt="" />
          </Avatar>
          <Stack spacing={2}>
            <Typography variant="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{title}</Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>
              {caption}
            </Typography>
          </Stack>
        </Stack>
      </SubCard>
    </FadeInWhenVisible>
  );
}
