import React, { useState } from 'react';
import { makeStyles, Typography, TextField, Button, Dialog, DialogContent } from '@material-ui/core';

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

function CreateBoard({open, handleClose, history}) {
    const classes = useStyles();

    const [title, onChangeTitle] = useState('');
    const [description, onChangeDescription] = useState('');

    const newBoard = () => {
        fetch('https://funretro-api813.herokuapp.com/board/create-board', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
            })
        })
        .then(response => response.json())
        .then(
            (data) => {
                alert('Create board successful');
                history.go(0);
            },
            (error) => {
                alert('Create board failed');
            }
        )
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="create-board">
            <DialogContent>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Create Board
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField 
                            id="title"
                            name="title"
                            label="Title"
                            margin="normal"
                            fullWidth
                            required
                            onChange={e => onChangeTitle(e.target.value)}
                            value={title}
                        />
                        <TextField 
                            id="description"
                            name="description"
                            label="Description"
                            margin="normal"
                            fullWidth
                            onChange={e => onChangeDescription(e.target.value)}
                            value={description}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.submit}
                            onClick={() => newBoard()}
                        >
                            Create
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CreateBoard;
