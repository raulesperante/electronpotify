import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiTheme from './MuiTheme';

import './index.scss';

function Main() {
    return <>
        <MuiTheme>
            <App />
        </MuiTheme>
    </>
}

ReactDOM.render(<Main />, document.getElementById('root'))
