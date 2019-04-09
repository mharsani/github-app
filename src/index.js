import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './view/styled/Theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Fragment>
            <App />
            <GlobalStyle />
        </Fragment>
    </ThemeProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
