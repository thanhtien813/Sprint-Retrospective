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

function Board({boardInfo, onClick, history}) {
    const classes = useStyles();

    const deleteClick = () => {
        fetch('https://funretro-api813.herokuapp.com/board/remove-board', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ boardId: boardInfo._id })
        })
        .then(response => response.json())
        .then(
            (data) => {
                alert(data.message);
                history.go(0);
            },
            (error) => {
                alert(error);
            }
        )
    }

    return (
        <Card className={classes.card} variant="outlined">
            <CardActionArea className={classes.root} onClick={onClick}>
                <CardContent>
                    <Typography gutterBottom variant="body1" component="h2">
                        {boardInfo.title}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                        {boardInfo.description}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        {boardInfo.createdTime.slice(0, 10)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" fullWidth>
                    <Link />
                    &nbsp;URL
                </Button>
                <Button size="small" color="primary" fullWidth onClick={() => deleteClick()}>
                    <Delete />
                    &nbsp;DELETE
                </Button>
            </CardActions>
        </Card>
    )
}

export default Board;