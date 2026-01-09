import React from 'react';
import { Link } from 'react-router-dom';
import {
    Drawer, List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Toolbar, Divider, Box
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings'
import CalendarToday from '@mui/icons-material/CalendarToday'

const drawerWidth = 240;

interface SidebarProps {
    mobileOpen?: boolean;
    handleDrawerToggle?: () => void;
    window?: () => Window;
}

const Sidebar = ({ mobileOpen = false, handleDrawerToggle, window }: SidebarProps) => {
    const container = window !== undefined ? () => window().document.body : undefined;

    const drawerContent = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/dashboard">
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
                    <ListItemButton component={Link} to="/Appointments">
                        <ListItemIcon> <CalendarToday/> </ListItemIcon>
                        <ListItemText primary="Appointments" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/Settings">
                        <ListItemIcon> <SettingsIcon /> </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* Mobile Drawer (Temporary) */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* Desktop Drawer (Permanent) */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </Box>
    );
};

export default Sidebar;