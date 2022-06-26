import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        black: {
            main: "#000000"
        },
        white: {
            main: "#ffffff"
        },
        orange: {
            main: "#ff5a36"
        },
        gray:{
            main: "#808080"
        },
        green:{
            main: "#6CE065"
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

