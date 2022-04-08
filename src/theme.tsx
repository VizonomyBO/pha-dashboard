import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#161A23',
          border: '2px solid #E3E5E5',
          borderRadius: '56px',
          padding: '12px 24px',
          minWidth: '160px',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: '"FuturaMedium", sans-serif',
          fontSize: '16px',
          '&:hover': {
            backgroundColor: '#EBFBFF'
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          width: '192px',
          fontFamily: '"FuturaMedium",sans-serif',
          fontSize: '14px',
          color: '#7A7E80',
          paddingRight: '0px !important',
          '&hover': {
            backgroundColor: '#EBFBFF'
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"FuturaMedium", sans-serif !important'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: '20px',
          backgroundColor: 'white !important',
          borderRadius: '25px !important',
          width: '264px !important',
          height: '287px',
          paddingBottom: '10px',
          paddingRight: '0px !important',
          '::-webkit-scrollbar': {
            '-webkit-appearance': 'none',
            width: '35px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#00BDE3',
            borderRadius: '50px',
            width: '6px',
            border: '15px solid white',
            paddingBottom: '50px',
          },
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          paddingLeft: '0px !important',
          paddingRight: '0px !important',
        }
      }
    },
  }
});
