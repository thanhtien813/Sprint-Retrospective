import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import MyAppBar from './MyAppBar';
import Board from '../Board';
import NewBoardButton from './NewBoardButton';
import CreateBoard from './CreateBoard';
import Profile from '../Profile';
import ChangePassword from './ChangePassword';
import BoardContent from '../BoardContent';

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
        margin: theme.spacing(0, 5, 0, 5),
    },
    title: {
        margin: theme.spacing(5),
    },
    bar: {
        margin: theme.spacing(0, 5, 2, 5),
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
}));

function Dashboard() {
    const classes = useStyles();

    const [createBoard, setCreateBoard] = useState(false);
    const openCreate = () => {
        setCreateBoard(true);
    };
    const closeCreate = () => {
        setCreateBoard(false);
    };

    const [profile, setProfile] = useState(false);
    const openProfile = () => {
        setProfile(true);
    };
    const closeProfile = () => {
        setProfile(false);
    };

    const [changePass, setChangePass] = useState(false);
    const openChangePass = () => {
        setChangePass(true);
    };
    const closeChangePass = () => {
        setChangePass(false);
    };

    const [boardContent, setBoardContent] = useState(false);
    const openBoardContent = () => {
        setBoardContent(true);
    };
    const closeBoardContent = () => {
        setBoardContent(false);
    };

    return (
        <div className={classes.root}>
            <MyAppBar profileClick={openProfile} changePass={openChangePass}/>
            <div className={classes.title}>
                <Typography component="h4" variant="h4" style={{color: "darkblue", fontWeight: "bold"}}>
                    My Boards
                </Typography>
            </div>
            <div className={classes.listBoards}>
                <NewBoardButton onClick={openCreate}/>
                {listBoards.map((board) => (
                    <Board boardInfo={board} onClick={openBoardContent}/>
                ))}
            </div>
            <CreateBoard open={createBoard} handleClose={closeCreate}/>
            <Profile open={profile} handleClose={closeProfile}/>
            <ChangePassword open={changePass} handleClose={closeChangePass}/>
            <BoardContent open={boardContent} handleClose={closeBoardContent}/>
        </div>
    )
}

export default Dashboard;