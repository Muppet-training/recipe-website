import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

const MyAwesomeReactComponent = () => (
    <div>
        <Link to="/login">
            <RaisedButton label="Login" />
        </Link>
        <Link to="/receipe">
            <RaisedButton label="receipe" />
        </Link>
    </div>

);

export default MyAwesomeReactComponent;