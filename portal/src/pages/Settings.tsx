import React, { useState } from 'react';
import {
    Box, Typography, Paper, List, ListItem, ListItemIcon,
    ListItemText, Switch, Button, Divider, Alert, ListItemButton
} from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    // Allow the state itself to be null
    const [testStatus, setTestStatus] = useState<{msg: string, type: 'success'|'error' | null} | null>(null);

    const handleLogout = () => {
        if(window.confirm("Are you sure you want to logout?")) {
            navigate('/login');
        }
    };

    const handleTestConnection = () => {
        // Simulate a backend ping
        setTestStatus({ msg: "Testing connection...", type: null });
        setTimeout(() => {
            // Randomly succeed or fail for demo
            const isSuccess = Math.random() > 0.2;
            if(isSuccess) setTestStatus({ msg: "Connection to Spring Boot: SUCCESS (20ms)", type: "success" });
            else setTestStatus({ msg: "Connection Failed: Backend unreachable", type: "error" });
        }, 1500);
    };

    return (
        <Box maxWidth="md">
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>System Settings</Typography>

            {/* ALERT BOX FOR TEST CONNECTION */}
            {testStatus?.type && (
                <Alert severity={testStatus.type} sx={{ mb: 3 }} onClose={() => setTestStatus(null)}>
                    {testStatus.msg}
                </Alert>
            )}

            <Paper>
                <List>
                    {/* CONNECTION TEST */}
                    <ListItem>
                        <ListItemIcon><WifiIcon /></ListItemIcon>
                        <ListItemText
                            primary="Backend Connection"
                            secondary="Check if Spring Boot API is reachable"
                        />
                        <Button variant="outlined" size="small" onClick={handleTestConnection}>
                            Test Ping
                        </Button>
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    {/* DARK MODE */}
                    <ListItem>
                        <ListItemIcon><DarkModeIcon /></ListItemIcon>
                        <ListItemText primary="Dark Mode" secondary="Toggle application theme" />
                        <Switch
                            edge="end"
                            checked={darkMode}
                            onChange={(e) => setDarkMode(e.target.checked)}
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    {/* LOGOUT */}
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon><LogoutIcon color="error" /></ListItemIcon>
                            <ListItemText
                                primary="Logout"
                                primaryTypographyProps={{ color: 'error', fontWeight: 'bold' }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>

            <Typography variant="caption" display="block" sx={{ mt: 4, textAlign: 'center', color: 'gray' }}>
                USMAQ System v1.0.0 (Build 2026)
            </Typography>
        </Box>
    );
};

export default Settings;