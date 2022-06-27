import React from 'react';
import ReactDOM from 'react-dom';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from './App';
import MuiTheme from './MuiTheme';

import './index.scss';

function Main() {
    return <>
        <Provider store={store}>
            <MuiTheme>
                <App />
            </MuiTheme>
        </Provider>
    </>
}

ReactDOM.render(<Main />, document.getElementById('root'))
