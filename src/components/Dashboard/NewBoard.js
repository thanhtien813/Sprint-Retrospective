import React from 'react';
import { makeStyles, Card, CardActionArea, CardContent, Box, Icon, Typography } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(1),
        width: "15%",
        height: 122,
    },
    root: {
        height: 122,
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

function NewBoard() {
    const classes = useStyles();
    return (
        <Box border={2} borderRadius={5} borderColor="primary.main" className={classes.card}>
            <Card>
                <CardActionArea className={classes.root}>
                    <CardContent>
                        <Box className={classes.box}>
                            <Icon fontSize="large" gutterBottom>
                                <AddCircle fontSize="large" color="primary"/>
                            </Icon>
                            <Typography color="primary">
                                Add Board
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
        
    )
}

export default NewBoard;