import React from 'react';
import { Container, Typography, TextField, Button, makeStyles, Grid, Link, Box } from '@material-ui/core';

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

function SignUp() {
    const classes = useStyles();
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
                    />
                    <TextField 
                        id="username"
                        label="Username"
                        name="username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
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
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link href="#" variant="body2">
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