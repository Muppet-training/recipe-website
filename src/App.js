import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import LoginForm from './login-form';
import { Router, Route } from 'react-router-dom';
// import history from './history';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router history={history}>
                    <div>

                        <Route path="/login" component={LoginForm} />
                        <Route path="/" exact component={MyAwesomeReactComponent} />
                    </div>

                </Router>
            </MuiThemeProvider>

        );
    }
}

export default App;
