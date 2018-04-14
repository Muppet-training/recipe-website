import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

const MyAwesomeReactComponent = () => (
    <Link to="/login">
        <RaisedButton label="Login" />
    </Link>

);

export default MyAwesomeReactComponent;