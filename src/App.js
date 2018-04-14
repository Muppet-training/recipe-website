import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducers/index';
import MyAwesomeReactComponent from './component/MyAwesomeReactComponent';
import LoginForm from './component/login-form';
import ReceipeEdit from './component/ReceipeEdit';
import { Router, Route } from 'react-router-dom';
// import history from './history';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
// Create redux store
const store = createStore(
    reducers,
    applyMiddleware(thunk),
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                        <Router history={history}>
                            <div>
                                <Route path="/login" component={LoginForm} />
                                <Route path="/receipe" component={ReceipeEdit} />
                                <Route path="/" exact component={MyAwesomeReactComponent} />
                            </div>

                        </Router>
                </MuiThemeProvider>
            </Provider>

        );
    }
}

export default App;
