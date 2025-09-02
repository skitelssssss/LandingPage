import { ThemeMode } from 'config';
import { cloneElement } from 'react';
import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';

function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  return cloneElement(children, {
    elevation: trigger ? 1 : 0,
    style: {
      backgroundColor: theme.palette.mode === ThemeMode.DARK && trigger ? theme.palette.dark[800] : theme.palette.background.default,
      color: theme.palette.text.dark
    }
  });
}

export default ElevationScroll;

ElevationScroll.propTypes = { children: PropTypes.node, window: PropTypes.any };
