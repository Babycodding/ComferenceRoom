import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
// import HomePage from './container/home';
import { ThemeProvider } from '@material-ui/styles';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import CssBaseline from "@material-ui/core/CssBaseline";
import './styles/main.scss'
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
