import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import Note from './Note';

const sample = [
    {
        boardId: '123',
        content: 'This is note1',
    },
    {
        boardId: '123',
        content: 'This is note2',
    },
    {
        boardId: '123',
        content: 'This is note3',
    },
    {
        boardId: '123',
        content: 'This is note4',
    }
];

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
    }
}));

function Column({type}) {
    const classes = useStyles();

    let color;
    if (type === 1) {
        color = 'primary.main';
    } else if (type === 2) {
        color = 'secondary.main';
    } else {
        color = 'grey.500';
    }

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Box bgcolor={color} p={2} borderRadius={5} style={{marginRight: 7}}/>
                <Typography component="h6" variant="h6">
                    {type === 1 ? 'Went Well' : (type === 2 ? 'To Improve' : 'Action Items')}
                </Typography>
            </div>
            <div className={classes.content}>
                {sample.map(item =>
                    <Note type={type} content={item.content} />
                )}
            </div>
        </div>
    )
}

export default Column;