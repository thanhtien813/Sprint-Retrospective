import React, { useState } from 'react';
import { Box, makeStyles, Typography, Button } from '@material-ui/core';
import Note from './Note';
import AddNote from './AddNote';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(1),
    },
    addNote: {
        margin: theme.spacing(1, 0, 1, 0)
    }
}));

function Column({type, listNote, boardId, history}) {
    const classes = useStyles();

    let color;
    if (type === 1) {
        color = 'primary.main';
    } else if (type === 2) {
        color = 'secondary.main';
    } else {
        color = 'grey.500';
    }

    const [open, setOpen] = useState(false);

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Box bgcolor={color} p={2} borderRadius={5} style={{marginRight: 7}}/>
                <Typography component="h6" variant="h6">
                    {type === 1 ? 'Went Well' : (type === 2 ? 'To Improve' : 'Action Items')}
                </Typography>
            </div>
            <div>
                <Button
                    variant="contained"
                    fullWidth
                    className={classes.addNote}
                    onClick={() => setOpen(true)}
                >
                    ADD
                </Button>
            </div>
            <div className={classes.content}>
                {listNote.map(item =>
                    <Note type={type} card={item} history={history}/>
                )}
            </div>
            <AddNote open={open} handleClose={() => setOpen(false)} type={type} boardId={boardId} history={history}/>
        </div>
    )
}

export default Column;