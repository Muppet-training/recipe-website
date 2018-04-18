import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const MyAwesomeReactComponent = () => (
    <div>
        <Link to="/login">
            <RaisedButton label="Login" />
        </Link>
        <Link to="/edit-recipe">
            <RaisedButton label="recipe" />
        </Link>
        <Link to="/add-recipe">
            <RaisedButton label="Add Recipe" />
        </Link>
    </div>
);

export default MyAwesomeReactComponent;