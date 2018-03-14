import React from 'react';
import ReactDOM from 'react-dom';
import Router from "react-router-dom/Router";
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';
import rootStore from './stores/RootStore';
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Provider {...rootStore}>
            <App />
        </Provider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
