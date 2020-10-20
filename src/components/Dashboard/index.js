import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyAppBar from './MyAppBar';
import Board from '../Board';
import NewBoard from './NewBoard';

const listBoards = [
    {
        name: 'Test Note 1',
        description: 'This is test note 1',
        createdTime: '10/10/2020',
        url: 'https://www.youtube.com/watch?v=jzr4PnlCxDM',
    },
    {
        name: 'Test Note 1',
        description: 'This is test note 1',
        createdTime: '10/10/2020',
        url: 'https://www.youtube.com/watch?v=jzr4PnlCxDM',
    },
    {
        name: 'Test Note 1',
        description: 'This is test note 1',
        createdTime: '10/10/2020',
        url: 'https://www.youtube.com/watch?v=jzr4PnlCxDM',
    },
    {
        name: 'Test Note 1',
        description: 'This is test note 1',
        createdTime: '10/10/2020',
        url: 'https://www.youtube.com/watch?v=jzr4PnlCxDM',
    },
    {
        name: 'Test Note 1',
        description: 'This is test note 1',
        createdTime: '10/10/2020',
        url: 'https://www.youtube.com/watch?v=jzr4PnlCxDM',
    },
    {
        name: 'Test Note 1',
        description: 'This is test note 1',
        createdTime: '10/10/2020',
        url: 'https://www.youtube.com/watch?v=jzr4PnlCxDM',
    },
    {
        name: 'Test Note 1',
        description: 'This is test note 1',
        createdTime: '10/10/2020',
        url: 'https://www.youtube.com/watch?v=jzr4PnlCxDM',
    },
    {
        name: 'Test Note 1',
        description: 'This is test note 1',
        createdTime: '10/10/2020',
        url: 'https://www.youtube.com/watch?v=jzr4PnlCxDM',
    },
    {
        name: 'Test Note 1',
        description: 'This is test note 1',
        createdTime: '10/10/2020',
        url: 'https://www.youtube.com/watch?v=jzr4PnlCxDM',
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    listBoards: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: theme.spacing(1),
    }
}));

function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MyAppBar />
            <div className={classes.listBoards}>
                <NewBoard />
                {listBoards.map((board) => (
                    <Board boardInfo={board} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard;