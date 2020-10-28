import React from 'react';
import { Dialog, DialogContent, Typography, TextField, Button, makeStyles } from '@material-ui/core';

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
    }
}));

function ChangePassword({open, handleClose}) {
    const classes = useStyles();
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="change-password">
            <DialogContent>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Change Password
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField 
                            id="currentPass"
                            name="currentPass"
                            label="Current Password"
                            margin="normal"
                            fullWidth
                            required
                        />
                        <TextField 
                            id="newPass"
                            name="newPass"
                            label="New Password"
                            margin="normal"
                            fullWidth
                            required
                        />
                        <TextField 
                            id="confirm"
                            name="confirm"
                            label="Confirm Password"
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
                            Change
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ChangePassword;
