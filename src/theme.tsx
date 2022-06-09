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
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: '#7B7A80',
          '&.Mui-checked': {
            color: '#00BDE3',
            left: '-6px',
          },
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#fff',
            border: '2px solid #00BDE3',
            opacity: '1',
          },
        },
        thumb: {
          width: '10px',
          height: '10px',
          marginTop: '8px',
          marginLeft: '9px',
          '&.Mui-checked + .MuiSwitch-track': {
            marginRight: '100px',
          },
        },
        track: {
          backgroundColor: '#fff',
          border: '2px solid #7B7A80',
          width: '100%',
          height: '20px',
          borderRadius: '20px',
          opacity: '1',
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          width: '192px',
          fontFamily: '"FuturaMedium",sans-serif',
          fontSize: '14px',
          height: '40px',
          color: '#7A7E80',
          paddingRight: '10px !important',
          '&hover': {
            backgroundColor: '#EBFBFF'
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"FuturaMedium", sans-serif !important',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          fontSize: '14px !important',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: '17px',
          backgroundColor: 'white',
          borderRadius: '25px',
          width: '264px',
          height: '170px',
          paddingBottom: '10px',
          border: '15px solid white',
          paddingRight: '0px',
          '::-webkit-scrollbar': {
            '-webkit-appearance': 'none',
            width: '6px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#00BDE3',
            borderRadius: '50px',
            width: '6px',
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
    MuiInputBase: {
      styleOverrides: {
        input: {
          em: {
            fontStyle: 'normal !important',
          }
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
        },
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: '0px'
        },
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: '#7A7E80',
          backgroundColor: '#FFFFFF',
          boxShadow: '5px 5px 10px #888888',
          fontFamily: 'FuturaMedium,sans-serif',
          fontSize: '14px'
        },
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: '1em',
          height: '1em',
        }
      }
    },
  }
});
