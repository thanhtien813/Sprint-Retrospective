import React from 'react';
import { makeStyles, Typography, IconButton, Dialog, Slide, AppBar, Toolbar } from '@material-ui/core';
import { Settings, Close } from '@material-ui/icons';
import Column from '../Column';

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

function BoardContent({open, handleClose}) {
    const classes = useStyles();
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
                    <IconButton aria-label="edit" size="small" style={{marginRight: 5}}>
                        <Settings fontSize="small"/>
                    </IconButton>
                    <Typography component="h6" variant="h6" style={{marginRight: 15}}>
                        Test Note
                    </Typography>
                    <Typography component="p" variant="inherit">
                        Description
                    </Typography>
                </div>
                <div className={classes.notes}>
                    <div style={{margin: 5, width: '33%'}}><Column type={1} /></div>
                    <div style={{margin: 5, width: '33%'}}><Column type={2} /></div>
                    <div style={{margin: 5, width: '33%'}}><Column type={3} /></div>
                </div>
            </div>
        </Dialog>
    )
}

export default BoardContent;