import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        black: {
            main: "#000000"
        },
        white: {
            main: "#ffffff"
        }
    },
});

export default function MuiTheme({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

