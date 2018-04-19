import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <Link to="/login">
            <RaisedButton label="Login" />
        </Link>
        <Link to="/list-recipes">
            <RaisedButton label="Recipe List" />
        </Link>

    </div>
);

export default Home;