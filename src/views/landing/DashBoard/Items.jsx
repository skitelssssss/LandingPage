import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Link } from '@mui/material';
import { IconLink } from '@tabler/icons-react';

const Images = styled('img')({
  width: '100%',
  height: 'auto',
  marginBottom: 32,
  backgroundSize: 'cover',
  objectFit: 'cover'
});

function Items({ title, caption, image, link }) {
  return (
    <>
      <Images
        src={image}
        alt="dashboard"
        sx={{
          width: { xs: '100%', xl: 743 },
          objectFit: 'contain',
          direction: 'initial'
        }}
      />
      <Stack spacing={1} sx={{ pt: 1 }}>
        <Stack
          direction="row"
          spacing={1}
          component={Link}
          to={link}
          target="_blank"
          sx={{ alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
        >
          <Typography variant="h3" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
          <IconButton size="small" sx={{ color: 'text.primary' }}>
            <IconLink aria-label="link button" size={18} />
          </IconButton>
        </Stack>
        <Typography variant="subtitle2" sx={{ color: 'text.primary', fontSize: { xs: '1rem', xl: '1.125rem' } }}>
          {caption}
        </Typography>
      </Stack>
    </>
  );
}

export default Items;

Items.propTypes = { title: PropTypes.string, caption: PropTypes.string, image: PropTypes.string, link: PropTypes.string };