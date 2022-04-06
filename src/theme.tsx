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
          '&hover': {
            backgroundColor: '#EBFBFF'
          }
        }
      }
    }
  }
});
