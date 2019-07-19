import { createMuiTheme } from '@material-ui/core/styles';
// import deepOrange from '@material-ui/core/colors/purple';
import KanitTtf from '../fonts/Kanit-Regular.ttf';
import Kanitwoff2 from '../fonts/Kanit-Regular.woff2';
const Kanit = {
    fontFamily: "Kanit",
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('Kanit'),
      local('Kanit-Regular'),
      url('${KanitTtf}') format('ttf'),
      url('${Kanitwoff2}') format('woff2')
    `,
    unicodeRange: 'U+0E00-U+0E7F',
};
export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#324148',
            light: '#5c6c73',
            dark: '#0c1b21'
        },
        secondary: {
            main: '#26a69a',
            light: '#64d8cb',
            dark: '#00766c'
        },
        background: {
            default: "#eeeded"
        }
    },
    typography: {
        fontFamily: [
            'Kanit',
            'Raleway',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [Kanit],
            },
        },
    },
});