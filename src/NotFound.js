import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Sorry</h2>
            <p>This page can not be found. its a 404 page.</p>
            <Link to="/">Back to the home</Link>

        </div>
    );
};

export default NotFound;