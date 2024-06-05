// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#635BFF', // Change this to your desired primary color
        },
        secondary: {
          main: '#dc004e', // Change this to your desired secondary color
        },
        background: {
          default: '#f5f5f5', // Change this to your desired background color
        },
      }
});

export default theme;
