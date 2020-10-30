import React from 'react';
import { Dialog, DialogContent, makeStyles, TextField, Button, Typography } from '@material-ui/core';

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

function Profile({open, handleClose}) {
    const classes = useStyles();
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="profile">
            <DialogContent>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        User Profile
                    </Typography>
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
            </DialogContent>
        </Dialog>
    )
}

export default Profile;