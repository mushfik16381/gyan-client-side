import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'

const Login = () => {
    
    return (
        <div className='w-25 mx-auto login-container'>
            <h3 className='text'>Please Login Now!</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <button className='login'>Login</button>
                {/* <Button variant="primary" type="submit">
                    Login
                </Button> */}
            </Form>
        </div>
    );
};
export default Login;