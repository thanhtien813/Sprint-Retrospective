import React, { useState } from 'react';
import { makeStyles, AppBar, Toolbar, Link, IconButton, Menu, MenuItem, ListItemIcon, Typography } from '@material-ui/core';
import { AccountCircle, PersonOutline, VpnKey, ExitToApp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24,
    },
    linkDashboard: {
        flexGrow: 1,
    }
}));

function MyAppBar() {
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
                <Link 
                    href="#" 
                    variant="body2" 
                    color="inherit" 
                    underline="none"
                >
                    SPRINT RETROSPECTIVE
                </Link>
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
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <PersonOutline fontSize="small"/>
                                </ListItemIcon>
                                <Typography variant="inherit">Profile</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <VpnKey fontSize="small"/>
                                </ListItemIcon>
                                <Typography variant="inherit">Change Password</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <ExitToApp fontSize="small"/>
                                </ListItemIcon>
                                <Typography variant="inherit">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default MyAppBar;