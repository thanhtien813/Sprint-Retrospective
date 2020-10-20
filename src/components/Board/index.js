import React from 'react';
import { CardActionArea, CardContent, makeStyles, Card, Typography, CardActions, Button, Box } from '@material-ui/core';
import { Link } from '@material-ui/icons';

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

function Board({boardInfo}) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.root}>
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
                    <div className={classes.box}>
                        <Box bgcolor="success.main" p={2} margin={1}/>
                        <Box bgcolor="secondary.main" p={2} margin={1}/>
                        <Box bgcolor="primary.main" p={2} margin={1}/>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" fullWidth>
                    <Link />
                    &nbsp;URL
                </Button>
            </CardActions>
        </Card>
    )
}

export default Board;