import React from 'react';
import { Container, TextField, Typography, Button, Grid, Link, Box, makeStyles, Fab } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FcGoogle } from 'react-icons/fc';

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
                    <Box mt={1} />
                    <Grid container justify="center">
                        <Grid item>
                            <Typography variant="body2" color="textSecondary">
                                or you can sign in with
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box mt={2} />
                    <Grid container spacing={5} direction="row" justify="center" alignItems="center">
                        <Grid item>
                            <Fab aria-label="add" size="small">
                                <FcGoogle size="small"/>
                            </Fab>
                        </Grid>
                        <Grid item>
                            <Fab color="primary" aria-label="add" size="small">
                                <FacebookIcon />
                            </Fab>
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