import { alpha } from '@mui/material/styles';

import { ThemeMode } from 'config';

export default function Chip(theme) {
  return {
    MuiChip: {
      defaultProps: {
        color: 'primary',
        variant: 'light'
      },
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit'
          },
          variants: [
            {
              props: { variant: 'light' }, 
              style: ({ ownerState }) => {
                const paletteColor = theme.palette[ownerState.color];

                return {
                  ...(paletteColor && {
                    color: paletteColor.main,
                    backgroundColor: theme.palette.mode === ThemeMode.DARK ? alpha(paletteColor.dark, 0.15) : paletteColor.light,
                    ...(ownerState.color === 'error' && {
                      backgroundColor:
                        theme.palette.mode === ThemeMode.DARK ? alpha(paletteColor.dark, 0.15) : alpha(paletteColor.light, 0.25)
                    }),
                    ...(ownerState.color === 'success' && {
                      backgroundColor:
                        theme.palette.mode === ThemeMode.DARK ? alpha(paletteColor.dark, 0.15) : alpha(paletteColor.light, 0.5)
                    }),
                    ...((ownerState.color === 'warning' || ownerState.color === 'success') && {
                      color: theme.palette.mode === ThemeMode.DARK ? paletteColor.main : paletteColor.dark
                    }),
                    '&.MuiChip-clickable': {
                      '&:hover': {
                        color: theme.palette.mode === ThemeMode.DARK ? paletteColor.dark : paletteColor.light,
                        backgroundColor: theme.palette.mode === ThemeMode.DARK ? paletteColor.light : paletteColor.dark
                      }
                    }
                  })
                };
              }
            },
            {
              props: { variant: 'outlined', color: 'warning' },
              style: {
                borderColor: theme.palette.warning.dark,
                color: theme.palette.warning.dark
              }
            },
            {
              props: { variant: 'outlined', color: 'success' },
              style: {
                borderColor: theme.palette.success.dark,
                color: theme.palette.success.dark
              }
            }
          ]
        }
      }
    }
  };
}
