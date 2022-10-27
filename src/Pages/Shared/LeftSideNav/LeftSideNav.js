import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h4>All Category:{categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>

                    </p>)
                }
            </div>
            <div>
                <h2>login Pages</h2>
                <ButtonGroup vertical>
                    <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default LeftSideNav;