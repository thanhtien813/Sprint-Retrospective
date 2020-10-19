import React from 'react';
import { Container, TextField, Typography, Button, Grid, Link, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

function SignIn() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField 
                        id="username"
                        name="username"
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField 
                        id="password"
                        name="password"
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Don't have an account ? Sign up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Typography variant="body2" color="textSecondary" align="center">
                    1712813 - Nguyen Thanh Tien
                </Typography>
            </Box>
        </Container>
    )
}

export default SignIn;