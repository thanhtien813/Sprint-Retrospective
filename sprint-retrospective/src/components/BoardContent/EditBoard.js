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

function EditBoard({open, handleClose, content, history}) {
    const classes = useStyles();

    const [title, onChangeTitle] = useState(content.title);
    const [description, onChangeDescription] = useState(content.description);

    const change = () => {
        fetch('https://funretro-api813.herokuapp.com/board/rename-board', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                boardId: content._id,
                newTitle: title,
                newDescription: description
            })
        })
        .then(response => response.json())
        .then(
            (data) => {
                alert(data.message);
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
                        Edit Board
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
                            required
                            onChange={e => onChangeDescription(e.target.value)}
                            value={description}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.submit}
                            onClick={() => change()}
                        >
                            Change
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default EditBoard;
