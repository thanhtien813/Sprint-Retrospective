import React from 'react';
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

function CreateBoard({open, handleClose}) {
    const classes = useStyles();

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="create-board">
            <DialogContent>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Create Board
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField 
                            id="name"
                            name="name"
                            label="Name"
                            margin="normal"
                            fullWidth
                            required
                        />
                        <TextField 
                            id="description"
                            name="description"
                            label="Description"
                            margin="normal"
                            fullWidth
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.submit}
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
