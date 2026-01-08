import React from 'react';
import { Link } from 'react-router-dom';
import {
    Drawer, List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Toolbar, Divider
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings'

const drawerWidth = 240;

const NavBar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box'
                },
            }}
        >
            <Toolbar />
            <Divider />

            <List>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon> <DashboardIcon /> </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/Patient">
                        <ListItemIcon> <PeopleIcon /> </ListItemIcon>
                        <ListItemText primary="Patients" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/Settings">
                        <ListItemIcon> <SettingsIcon /> </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default NavBar;