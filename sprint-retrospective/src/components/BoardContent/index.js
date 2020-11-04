import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, IconButton, Dialog, Slide, AppBar, Toolbar } from '@material-ui/core';
import { Settings, Close } from '@material-ui/icons';
import Column from '../Column';
import EditBoard from './EditBoard';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f3f3f3',
        height: '100%',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: theme.spacing(1),
        margin: theme.spacing(0, 0, 2, 0),
        alignItems: 'center'
    },
    notes: {
        display: 'flex',
        flexDirection: 'row',
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function BoardContent({open, handleClose, content, listNote, history}) {
    const classes = useStyles();

    const [edit, setEdit] = useState(false);

    return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >
            <AppBar style={{position: 'relative'}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <Close fontSize="small"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.root}>
                <div className={classes.title}>
                    <IconButton aria-label="edit" size="small" style={{marginRight: 5}} onClick={() => setEdit(true)}>
                        <Settings fontSize="small"/>
                    </IconButton>
                    <Typography component="h6" variant="h6" style={{marginRight: 15}}>
                        {content.title}
                    </Typography>
                    <Typography component="p" variant="inherit">
                        {content.description}
                    </Typography>
                </div>
                <div className={classes.notes}>
                    <div style={{margin: 5, width: '33%'}}><Column type={1} listNote={listNote.filter(item => item.type === 1)} boardId={content._id} history={history}/></div>
                    <div style={{margin: 5, width: '33%'}}><Column type={2} listNote={listNote.filter(item => item.type === 2)} boardId={content._id} history={history}/></div>
                    <div style={{margin: 5, width: '33%'}}><Column type={3} listNote={listNote.filter(item => item.type === 3)} boardId={content._id} history={history}/></div>
                </div>
            </div>
            <EditBoard open={edit} handleClose={() => setEdit(false)} content={content} history={history}/>
        </Dialog>
    )
}

export default BoardContent;