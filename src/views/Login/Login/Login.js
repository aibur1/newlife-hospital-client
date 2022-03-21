import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import image from '../../Images/login/1.jpg';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };


    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item sx={{ mt: 15 }} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField

                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard"
                    />

                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text">NEW USER ? PLEASE REGISTER</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>

                <p>------------------or----------------------</p>
                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>

            </Grid>
            <Grid item xs={12} md={6}>
                <img className='pt-5' style={{ width: '100%' }} src={image} alt="" srcset="" />
            </Grid>

        </Grid>
    </Container>
    );
};

export default Login;