import React, { useState } from 'react';
import { Card, makeStyles, CardContent, Typography, Box, IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import EditNote from './EditNote';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1, 0, 1, 0),
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

function Note({type, card, history}) {
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
        <Box borderLeft={7} borderRadius={3} borderColor={color} className={classes.root} >
            <Card>
                <CardContent className={classes.cardContent}>
                        <Typography variant="body2">
                            {card.content}
                        </Typography>
                        <IconButton aria-label="edit" size="small" onClick={() => setOpen(true)}>
                            <Edit fontSize="small"/>
                        </IconButton>
                </CardContent>
            </Card>
            <EditNote open={open} handleClose={() => setOpen(false)} card={card} history={history}/>
        </Box>
    )
}

export default Note;