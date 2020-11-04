import React, { useState } from 'react';
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

function AddNote({open, handleClose, type, boardId, history}) {
    const classes = useStyles();

    const [content, onChangeContent] = useState('');

    const newNote = () => {
        fetch('https://funretro-api813.herokuapp.com/card/add', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: content,
                type: type,
                boardId: boardId
            })
        })
        .then(response => response.json())
        .then(
            (data) => {
                alert('Add Note ' + data.message);
                history.go(0);
            },
            (error) => {
                alert(error);
            }
        )
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Add Note
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField 
                            id="content"
                            name="content"
                            label="Content"
                            margin="normal"
                            fullWidth
                            required
                            onChange={e => onChangeContent(e.target.value)}
                            value={content}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.submit}
                            onClick={() => newNote()}
                        >
                            Add
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddNote;
