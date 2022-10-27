import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Login = () => {

    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate('/')
                // setError('');
                // if (user.emailVerified) {
                //     navigate(from, { replace: true });
                // }
                // else {
                //     toast.error('Your email is not verified.')
                // }
            })
            .catch(error => {
                console.error(error)
                // setError(error.message);
            })
        // .finally(() => {
        //     setLoading(false);
        // })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>


            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">

            </Form.Text>
        </Form>
    );
};

export default Login;