import React, { useState } from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Menu, MenuItem, ListItemIcon, Typography } from '@material-ui/core';
import { AccountCircle, PersonOutline, ExitToApp, VpnKey } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24,
    },
    linkDashboard: {
        flexGrow: 1,
    }
}));

function MyAppBar({profileClick, changePass}) {
    const [ auth, setAuth ] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography 
                    variant="h6" 
                    color="inherit" 
                >
                    SPRINT RETROSPECTIVE
                </Typography>
                <Typography className={classes.linkDashboard}></Typography>
                {auth && (
                    <div>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            color="inherit"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                        >
                            <AccountCircle fontSize="large"/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={profileClick}>
                                <ListItemIcon>
                                    <PersonOutline fontSize="small"/>
                                </ListItemIcon>
                                <Typography variant="inherit">Profile</Typography>
                            </MenuItem>
                            <MenuItem onClick={changePass}>
                                <ListItemIcon>
                                    <VpnKey fontSize="small"/>
                                </ListItemIcon>
                                <Typography variant="inherit">Change Password</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => localStorage.clear()}>
                                <Link to="/login" style={{textDecoration: "none"}}>
                                    <ListItemIcon>
                                        <ExitToApp fontSize="small"/>
                                    </ListItemIcon>
                                    <Typography variant="inherit">Logout</Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default MyAppBar;