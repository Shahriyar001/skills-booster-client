import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://skills-booster-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSingIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

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
                <h3 className=' p-2 border=primary'>login Via</h3>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSingIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default LeftSideNav;