import React from 'react';
import { Link } from 'react-router-dom';

const Conditions = () => {
    return (
        <div>
            <h3>Here is out terms and conditions</h3>
            <p>Go back to: <Link to='/register'>Register</Link></p>

        </div>
    );
};

export default Conditions;