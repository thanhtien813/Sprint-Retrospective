import React, { useEffect, useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import MyAppBar from './MyAppBar';
import Board from '../Board';
import NewBoardButton from './NewBoardButton';
import CreateBoard from './CreateBoard';
import Profile from '../Profile';
import ChangePassword from './ChangePassword';
import BoardContent from '../BoardContent';

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

function Dashboard({history}) {
    const classes = useStyles();

    const [listBoards, setListBoards] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            history.push('/login');
            return;
        }

        fetch('https://funretro-api813.herokuapp.com/board/get-list-board', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(
            (data) => {
                setListBoards(data);
            },
            (error) => {
                alert('Get data failed!');
            }
        );
    }, [])

    const [createBoard, setCreateBoard] = useState(false);
    const [profile, setProfile] = useState(false);
    const [changePass, setChangePass] = useState(false);
    const [boardContent, setBoardContent] = useState(false);

    const [boardInfo, setBoardInfo] = useState({});
    const [listNote, setListNote] = useState([]);
    const openBoardContent = (info) => {
        setBoardContent(true);
        setBoardInfo(info);
        fetch('https://funretro-api813.herokuapp.com/card/get-list-card?boardId=' + info._id, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(
            (data) => {
                setListNote(data);
            },
            (error) => {
                alert(error);
            }
        )
    }

    return (
        <div className={classes.root}>
            <MyAppBar profileClick={() => setProfile(true)} changePass={() => setChangePass(true)}/>
            <div className={classes.title}>
                <Typography component="h4" variant="h4" style={{color: "darkblue", fontWeight: "bold"}}>
                    My Boards
                </Typography>
            </div>
            <div className={classes.listBoards}>
                <NewBoardButton onClick={() => setCreateBoard(true)}/>
                {listBoards.map((board) => (
                    <Board boardInfo={board} onClick={() => openBoardContent(board)} history={history}/>
                ))}
            </div>
            <CreateBoard open={createBoard} handleClose={() => setCreateBoard(false)} history={history}/>
            <Profile open={profile} handleClose={() => setProfile(false)} history={history}/>
            <ChangePassword open={changePass} handleClose={() => setChangePass(false)}/>
            <BoardContent open={boardContent} handleClose={() => setBoardContent(false)}
                content={boardInfo} listNote={listNote} history={history}
            />
        </div>
    )
}

export default Dashboard;