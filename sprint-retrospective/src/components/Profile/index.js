import React, { useState, useEffect } from 'react';
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

function Profile({open, handleClose, history}) {
    const classes = useStyles();

    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');

    useEffect(() => {
        fetch('https://funretro-api813.herokuapp.com/profile/get', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(
            (data) => {
                onChangeName(data.user.fullName);
                onChangeEmail(data.user.email);
            }
        )
    }, [])

    const updateInfo = () => {
        fetch('https://funretro-api813.herokuapp.com/profile/update', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: name,
                email: email
            })
        })
        .then(response => response.json())
        .then(
            (data) => {
                alert('Update profile successful');
                history.go(0);
            },
            (error) => {
                alert('Update profile failed');
            }
        )
    }

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
                            defaultValue={name}
                            margin="normal"
                            variant="outlined"
                            onChange={e => onChangeName(e.currentTarget.value)}
                            value={name}
                        />
                        <TextField 
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            defaultValue={email}
                            type="email"
                            margin="normal"
                            variant="outlined"
                            onChange={e => onChangeEmail(e.currentTarget.value)}
                            value={email}
                        />
                        <Button 
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.submit}
                            onClick={() => updateInfo()}
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