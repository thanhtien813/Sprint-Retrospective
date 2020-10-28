import React, { useState } from 'react';
import { Card, makeStyles, CardContent, Typography, Box } from '@material-ui/core';
import { Edit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "30%",
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardAction: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
}));

function Note({type, content}) {
    const classes = useStyles();

    let color;

    return (
        <Box border={1} borderColor="text.secondary" className={classes.card}>
            <Card variant="outlined" className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="body2">
                        {content}
                    </Typography>
                    <IconButton aria-label="edit" size="small">
                        <Edit fontSize="small"/>
                    </IconButton>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Note;