import React from 'react';
import { Container, makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
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
    },
}));

function Profile() {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <TextField 
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        defaultValue="Nguyen Thanh Tien"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField 
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        defaultValue="example@gmail.com"
                        type="email"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={classes.submit}
                    >
                        Update
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default Profile;