import React from 'react';
import { CardActionArea, CardContent, makeStyles, Card, Typography, CardActions, Button } from '@material-ui/core';
import { Link, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(1),
        minWidth: "15%",
    },
    root: {
        maxWidth: 250,
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    }
}));

function Board({boardInfo, onClick}) {
    const classes = useStyles();
    return (
        <Card className={classes.card} variant="outlined">
            <CardActionArea className={classes.root} onClick={onClick}>
                <CardContent>
                    <Typography gutterBottom variant="body1" component="h2">
                        {boardInfo.name}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                        {boardInfo.description}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        {boardInfo.createdTime}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" fullWidth>
                    <Link />
                    &nbsp;URL
                </Button>
                <Button size="small" color="primary" fullWidth>
                    <Delete />
                    &nbsp;DELETE
                </Button>
            </CardActions>
        </Card>
    )
}

export default Board;