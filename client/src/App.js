import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducers/index';
import Home from './component/Home';
import LoginForm from './component/login-form';
import ReceipeEdit from './container/ReceipeEdit';
import recipeAdd from './container/recipeAdd';
import RecipeList from './container/RecipeList';
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
                                <Route path="/edit-recipe/:id" component={ReceipeEdit} />
                                <Route path="/add-recipe" component={recipeAdd} />
                                <Route path="/list-recipes" component={RecipeList} />
                                <Route path="/" exact component={Home} />
                            </div>

                        </Router>
                </MuiThemeProvider>
            </Provider>

        );
    }
}

export default App;
