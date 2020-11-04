import React, { useState } from 'react';
import { Container, Typography, TextField, Button, makeStyles, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AlternateEmailTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(4, 0, 2),
    },
}));

function SignUp({history}) {
    const classes = useStyles();

    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [confirm, onChangeConfirm] = useState('');

    const signup = () => {
        if (password !== confirm) {
            alert('Password confirmation is incorrect');
        }
        fetch('https://funretro-api813.herokuapp.com/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                fullName: name,
                email: email,
            })
        })
        .then(response => response.json())
        .then(
            (data) => {
                alert('Sign up successful!');
                history.push('/login');
            },
            (error) => {
                alert('Signup failed');
                onChangeUsername('');
                onChangePassword('');
                onChangeName('');
                onChangeEmail('');
                onChangeConfirm('');
            }
        );
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField 
                        id="name"
                        label="Name"
                        name="name"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        onChange={e => onChangeName(e.target.value)}
                        value={name}
                    />
                    <TextField 
                        id="email"
                        label="Email"
                        name="email"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        type="email"
                        onChange={e => onChangeEmail(e.target.value)}
                        value={email}
                    />
                    <TextField 
                        id="username"
                        label="Username"
                        name="username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        onChange={e => onChangeUsername(e.target.value)}
                        value={username}
                    />
                    <TextField 
                        id="password"
                        label="Password"
                        name="password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        fullWidth
                        required
                        onChange={e => onChangePassword(e.target.value)}
                        value={password}
                    />
                    <TextField 
                        id="confirmPassword"
                        label="Confirm Password"
                        name="confirmPassword"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        fullWidth
                        required
                        onChange={e => onChangeConfirm(e.target.value)}
                        value={confirm}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => signup()}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link to="/login" variant="body2">
                                Already have an account ? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={3}>
                <Typography variant="body2" color="textSecondary" align="center">
                    1712813 - Nguyen Thanh Tien
                </Typography>
            </Box>
        </Container>
    )
}

export default SignUp;